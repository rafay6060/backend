import { Router } from 'express';
import User from '../models/User';
import Withdraw from '../models/Withdraw';
import Deposit from '../models/Deposit';
import Mine from '../models/Mine';
import Claim from '../models/Claim';
import Earn from '../models/Earn';
import { prisma } from '../db/prisma';
import { Prisma } from '@prisma/client';
import jwt from 'jsonwebtoken';

const AdminRoute: Router = Router();

// Simple admin authentication middleware (accepts Mongo or Postgres user id)
const adminAuth = async (req: any, res: any, next: any) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ success: false, message: 'No token provided' });
    }

    // If token looks like JWT, accept without DB check (basic auth for now)
    if (token.split('.').length === 3) {
      req.user = { id: 'jwt' };
      return next();
    }

    // Try Mongo ObjectId first
    let user: any = null;
    try { user = await User.findById(token); } catch {}

    // Fallback to Postgres via Prisma
    if (!user) {
      const pgUser = await prisma.users.findUnique({ where: { id: token } });
      if (pgUser) {
        req.user = { _id: pgUser.id, username: pgUser.username, email: pgUser.email, role: pgUser.role };
        return next();
      }
    }

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error('Admin auth error:', error);
    return res.status(401).json({ success: false, message: 'Invalid token' });
  }
};

// Enable admin authentication
AdminRoute.use(adminAuth);

// Admin Dashboard - Get overall statistics
AdminRoute.get("/dashboard", async (req: any, res: any) => {
    try {
        // Get total users
        const totalUsers = await User.countDocuments({});
        
        // Get total deposits
        const totalDeposits = await Deposit.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        
        // Get total withdrawals
        const totalWithdrawals = await Withdraw.aggregate([
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        
        // Get total mines
        const totalMines = await Mine.countDocuments({});
        
        // Get pending withdrawals
        const pendingWithdrawals = await Withdraw.countDocuments({ statusWithdraw: 'pending' });
        
        // Get approved withdrawals
        const approvedWithdrawals = await Withdraw.countDocuments({ statusWithdraw: 'approve' });
        
        // Get rejected withdrawals
        const rejectedWithdrawals = await Withdraw.countDocuments({ statusWithdraw: 'reject' });
        
        // Get total deposits count
        const totalDepositsCount = await Deposit.countDocuments({});
        
        // Get total withdrawals count
        const totalWithdrawalsCount = await Withdraw.countDocuments({});
        
        // Get today's statistics
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        
        const todayUsers = await User.countDocuments({ createdAt: { $gte: today } });
        const todayDeposits = await Deposit.aggregate([
            { $match: { date: { $gte: today } } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        const todayWithdrawals = await Withdraw.aggregate([
            { $match: { date: { $gte: today } } },
            { $group: { _id: null, total: { $sum: "$amount" } } }
        ]);
        
        // Get recent activities
        const recentUsers = await User.find().sort({ createdAt: -1 }).limit(5).select('-password');
        const recentWithdrawals = await Withdraw.find().sort({ createdAt: -1 }).limit(5);
        const recentDeposits = await Deposit.find().sort({ createdAt: -1 }).limit(5);

        res.status(200).json({
            success: true,
            data: {
                totalUsers,
                totalDeposits: totalDeposits[0]?.total || 0,
                totalWithdrawals: totalWithdrawals[0]?.total || 0,
                totalMines,
                pendingWithdrawals,
                approvedWithdrawals,
                rejectedWithdrawals,
                totalDepositsCount,
                totalWithdrawalsCount,
                todayUsers,
                todayDeposits: todayDeposits[0]?.total || 0,
                todayWithdrawals: todayWithdrawals[0]?.total || 0,
                recentUsers,
                recentWithdrawals,
                recentDeposits
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching dashboard data', error });
    }
});

// Per-user deposit summary (aggregate) for All Deposits page (PostgreSQL via Prisma)
AdminRoute.get("/deposits/summary", async (req: any, res: any) => {
  try {
    const pageNum = Number(req.query.page || 1);
    const limitNum = Number(req.query.limit || 1000);

    // Group deposits by user_id and sum amount
    const grouped = await prisma.deposits.groupBy({
      by: ['user_id'],
      _sum: { amount: true },
      orderBy: { _sum: { amount: 'desc' } },
      skip: (pageNum - 1) * limitNum,
      take: limitNum,
    });

    const userIds = grouped.map(g => g.user_id);
    const users = await prisma.users.findMany({
      where: { id: { in: userIds } },
      select: { id: true, username: true, email: true, deposit_amount: true },
    });
    const idToUser: Record<string, { username: string; email: string }> = {};
    for (const u of users) idToUser[u.id] = { username: u.username, email: u.email } as any;

    const summary = grouped.map(g => {
      const u = users.find(x => x.id === g.user_id);
      const override = u?.deposit_amount ? Number((u as any).deposit_amount) : 0;
      const summed = Number(g._sum.amount || 0);
      const total = override && override > 0 ? override : summed;
      return {
        userId: g.user_id,
        username: u?.username || 'Unknown',
        email: u?.email || '',
        totalDeposit: total,
      };
    });

    // Total unique users with deposits
    const distinctUsers = await prisma.deposits.findMany({
      distinct: ['user_id'],
      select: { user_id: true },
    });
    const totalUsersWithDeposits = distinctUsers.length;

    res.status(200).json({
      success: true,
      data: {
        summary,
        totalUsersWithDeposits,
        currentPage: pageNum,
        totalPages: Math.ceil(totalUsersWithDeposits / limitNum),
      },
    });
  } catch (error) {
    console.error('Error creating deposit summary (Prisma):', error);
    res.status(500).json({ success: false, message: 'Error creating deposit summary', error });
  }
});

// Update user deposit amount (override). Also sync Mongo User.depositAmount if exists
AdminRoute.patch('/users/:id/deposit-amount', async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { amount } = req.body as { amount: number };
    const parsed = Number(amount);
    if (Number.isNaN(parsed) || parsed < 0) {
      return res.status(400).json({ success: false, message: 'Invalid amount' });
    }

    const updated = await prisma.users.update({
      where: { id },
      data: { deposit_amount: new Prisma.Decimal(parsed) },
      select: { id: true, username: true, email: true, deposit_amount: true },
    });

    try {
      // Try by Mongo _id first
      let mongoUser = null as any;
      try { mongoUser = await User.findById(id); } catch {}
      // Fallback to email match because PG id != Mongo _id
      if (!mongoUser && updated?.email) {
        mongoUser = await User.findOne({ email: updated.email });
      }
      if (mongoUser) { mongoUser.depositAmount = parsed; await mongoUser.save(); }
    } catch {}

    return res.status(200).json({ success: true, data: updated });
  } catch (error) {
    console.error('Update deposit-amount error:', error);
    return res.status(500).json({ success: false, message: 'Failed to update deposit amount', error });
  }
});

// Get All Users
AdminRoute.get("/users", async (req: any, res: any) => {
    try {
        const { page = 1, limit = 100, search = '' } = req.query; // Increased limit to 100
        
        const query = search ? {
            $or: [
                { username: { $regex: search, $options: 'i' } },
                { email: { $regex: search, $options: 'i' } }
            ]
        } : {};

        // Get basic user data first
        const users = await User.find(query)
            .select('-password')
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit * 1)
            .lean();

        console.log('Basic users data:', users);

        // Add complete user data with all arrays
        const usersWithAmounts = await Promise.all(
            users.map(async (user) => {
                try {
                    // Get deposits for this user
                    const deposits = await Deposit.find({ userId: user._id });
                    console.log(`User ${user.username} deposits found:`, deposits.length);
                    console.log(`User ${user.username} deposits:`, deposits);
                    
                    // Try to get deposit amount from User model first
                    let depositAmount = user.depositAmount || 0;
                    
                    // If no deposit amount in User model, calculate from deposits
                    if (depositAmount === 0 && deposits.length > 0) {
                        depositAmount = deposits.reduce((sum, deposit) => {
                            console.log(`Adding deposit amount: ${deposit.amount} to sum: ${sum}`);
                            return sum + (deposit.amount || 0);
                        }, 0);
                    }
                    
                    console.log(`User ${user.username} final depositAmount:`, depositAmount);
                    
                    // Get withdrawals for this user
                    const withdrawals = await Withdraw.find({ userId: user._id });
                    const withdrawalAmount = withdrawals.reduce((sum, withdrawal) => sum + (withdrawal.amount || 0), 0);
                    
                    // Get claim coins for wallet balance
                    const claimCoins = await Claim.find({ userId: user._id });
                    const claimBalance = claimCoins.reduce((sum, coin) => sum + (coin.amount || 0), 0);
                    
                    // Get earn coins for wallet balance
                    const earnCoins = await Earn.find({ userId: user._id });
                    const earnBalance = earnCoins.reduce((sum, coin) => sum + (coin.amount || 0), 0);
                    
                    console.log(`User ${user.username}: deposits=${depositAmount}, withdrawals=${withdrawalAmount}, claim=${claimBalance}, earn=${earnBalance}`);
                    
                    return {
                        ...user,
                        deposits,
                        withdraw: withdrawals,
                        claimCoin: claimCoins,
                        earnCoin: earnCoins,
                        calculatedDepositAmount: depositAmount,
                        calculatedWithdrawalAmount: withdrawalAmount,
                        calculatedClaimBalance: claimBalance,
                        calculatedEarnBalance: earnBalance
                    };
                } catch (error) {
                    console.error(`Error getting amounts for user ${user.username}:`, error);
                    return {
                        ...user,
                        deposits: [],
                        withdraw: [],
                        claimCoin: [],
                        earnCoin: [],
                        calculatedDepositAmount: 0,
                        calculatedWithdrawalAmount: 0,
                        calculatedClaimBalance: 0,
                        calculatedEarnBalance: 0
                    };
                }
            })
        );

        console.log('Users with amounts:', usersWithAmounts);

        const totalUsers = await User.countDocuments(query);

        res.status(200).json({
            success: true,
            data: {
                users: usersWithAmounts,
                totalPages: Math.ceil(totalUsers / limit),
                currentPage: page,
                totalUsers
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching users', error });
    }
});

// Get All Withdrawals
AdminRoute.get("/withdrawals", async (req: any, res: any) => {
    try {
        const { page = 1, limit = 1000, status = '' } = req.query; // Increased limit to 1000
        
        const query = status ? { statusWithdraw: status } : {};

        const withdrawals = await Withdraw.find(query)
            .populate('userId', 'username email')
            .sort({ createdAt: -1 })
            .limit(limit * 1)
            .skip((page - 1) * limit);

        const totalWithdrawals = await Withdraw.countDocuments(query);

        res.status(200).json({
            success: true,
            data: {
                withdrawals,
                totalPages: Math.ceil(totalWithdrawals / limit),
                currentPage: page,
                totalWithdrawals
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching withdrawals', error });
    }
});

// Update Withdrawal Status
AdminRoute.patch("/withdrawals/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { status, adminMessage } = req.body;

        if (!['pending', 'approve', 'reject'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status' });
        }

        const withdrawal = await Withdraw.findByIdAndUpdate(
            id,
            { statusWithdraw: status },
            { new: true }
        ).populate('userId', 'username email');

        if (!withdrawal) {
            return res.status(404).json({ success: false, message: 'Withdrawal not found' });
        }

        // Send email notification
        try {
            const user = await User.findById(withdrawal.userId);
            if (user) {
                const subject = `Withdrawal ${status === 'approve' ? 'Approved' : 'Rejected'} - GMT Treasure`;
                
                let emailBody = '';
                if (status === 'approve') {
                    emailBody = `
                    <h2>Withdrawal Approved!</h2>
                    <p>Dear ${user.username},</p>
                    <p>Your withdrawal request for $${withdrawal.amount} has been <strong>APPROVED</strong>.</p>
                    <p>The amount will be processed and sent to your account.</p>
                    <p>Thank you for using GMT Treasure!</p>
                    `;
                } else if (status === 'reject') {
                    emailBody = `
                    <h2>Withdrawal Rejected</h2>
                    <p>Dear ${user.username},</p>
                    <p>Your withdrawal request for $${withdrawal.amount} has been <strong>REJECTED</strong>.</p>
                    ${adminMessage ? `<p><strong>Reason:</strong> ${adminMessage}</p>` : ''}
                    <p>If you have any questions, please contact our support team.</p>
                    <p>Thank you for using GMT Treasure!</p>
                    `;
                }

                // Here you would integrate with your email service
                // For now, we'll just log the email details
                console.log('Email to be sent:', {
                    to: user.email,
                    subject: subject,
                    body: emailBody
                });
            }
        } catch (emailError) {
            console.error('Email sending failed:', emailError);
        }

        // If approved, update user's remaining balance
        if (status === 'approve') {
            try {
                const user = await User.findById(withdrawal.userId);
                if (user) {
                    // Deduct the withdrawal amount from user's balance
                    user.remainingBalance = (user.remainingBalance || 0) - withdrawal.amount;
                    await user.save();
                }
            } catch (balanceError) {
                console.error('Error updating user balance:', balanceError);
            }
        }

        res.status(200).json({
            success: true,
            message: 'Withdrawal status updated successfully',
            data: withdrawal
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating withdrawal', error });
    }
});

// Get All Deposits
AdminRoute.get("/deposits", async (req: any, res: any) => {
    try {
        const { page = 1, limit = 1000, status = '' } = req.query; // Increased limit to 1000
        
        const query = status ? { status } : {};

        // Get deposits and remove duplicates based on transaction_Id
        const allDeposits = await Deposit.find(query)
            .populate('userId', 'username email')
            .sort({ date: -1 });

        // Remove duplicates based on transaction_Id
        const uniqueDeposits = allDeposits.filter((deposit, index, self) => 
            index === self.findIndex(d => d.transaction_Id === deposit.transaction_Id)
        );

        // Apply pagination to unique deposits
        const startIndex = (page - 1) * limit;
        const endIndex = startIndex + limit;
        const deposits = uniqueDeposits.slice(startIndex, endIndex);

        const totalDeposits = uniqueDeposits.length;

        console.log(`Total deposits: ${allDeposits.length}, Unique deposits: ${uniqueDeposits.length}`);

        res.status(200).json({
            success: true,
            data: {
                deposits,
                totalPages: Math.ceil(totalDeposits / limit),
                currentPage: page,
                totalDeposits
            }
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching deposits', error });
    }
});

// Get All Users with Deposit Amounts (for edit functionality)
AdminRoute.get("/all-deposits", async (req: any, res: any) => {
    try {
        const users = await User.find({})
            .select('username email depositAmount')
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            users: users
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching users', error });
    }
});

// Test API to check deposit data
AdminRoute.get("/test-deposits", async (req: any, res: any) => {
    try {
        // Get all deposits
        const allDeposits = await Deposit.find({});
        console.log('Total deposits in database:', allDeposits.length);
        console.log('All deposits:', allDeposits);
        
        // Get all users with deposit amounts
        const allUsers = await User.find({}).select('username email depositAmount');
        console.log('Total users in database:', allUsers.length);
        console.log('Users with deposit amounts:', allUsers.map(u => ({ username: u.username, depositAmount: u.depositAmount })));
        
        // Get first user
        const firstUser = await User.findOne({});
        if (firstUser) {
            const userDeposits = await Deposit.find({ userId: firstUser._id });
            console.log(`User ${firstUser.username} deposits:`, userDeposits);
            console.log(`User ${firstUser.username} depositAmount from User model:`, firstUser.depositAmount);
            
            const totalAmount = userDeposits.reduce((sum, deposit) => sum + (deposit.amount || 0), 0);
            console.log(`User ${firstUser.username} total deposit amount:`, totalAmount);
        }
        
        // Check if deposits collection exists and has data
        const depositCount = await Deposit.countDocuments({});
        console.log('Deposit collection count:', depositCount);
        
        res.status(200).json({
            success: true,
            totalDeposits: allDeposits.length,
            totalUsers: allUsers.length,
            depositCount: depositCount,
            sampleDeposits: allDeposits.slice(0, 5),
            sampleUsers: allUsers.slice(0, 3).map(u => ({ username: u.username, email: u.email, depositAmount: u.depositAmount }))
        });
    } catch (error) {
        console.error('Test deposits error:', error);
        res.status(500).json({ success: false, message: 'Error testing deposits', error });
    }
});

// Update User Deposit Amount
AdminRoute.put("/update-deposit/:userId", async (req: any, res: any) => {
    try {
        const { userId } = req.params;
        const { newDeposit } = req.body;

        if (!newDeposit || isNaN(newDeposit)) {
            return res.status(400).json({ success: false, message: 'Invalid deposit amount' });
        }

        const user = await User.findByIdAndUpdate(
            userId,
            { depositAmount: parseFloat(newDeposit) },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Deposit amount updated successfully',
            user: user
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating deposit amount', error });
    }
});

// Update Deposit Status
AdminRoute.patch("/deposits/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { status } = req.body;

        if (!['pending', 'approved', 'rejected'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Invalid status' });
        }

        const deposit = await Deposit.findByIdAndUpdate(
            id,
            { status },
            { new: true }
        ).populate('userId', 'username email');

        if (!deposit) {
            return res.status(404).json({ success: false, message: 'Deposit not found' });
        }

        res.status(200).json({
            success: true,
            message: 'Deposit status updated successfully',
            data: deposit
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating deposit', error });
    }
});

// Update Deposit Amount
AdminRoute.patch("/deposits/:id/amount", async (req: any, res: any) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;

        if (!amount || amount <= 0) {
            return res.status(400).json({ success: false, message: 'Invalid amount' });
        }

        const deposit = await Deposit.findByIdAndUpdate(
            id,
            { amount },
            { new: true }
        ).populate('userId', 'username email');

        if (!deposit) {
            return res.status(404).json({ success: false, message: 'Deposit not found' });
        }

        // Update user's deposit amount in User model
        const user = await User.findById(deposit.userId._id);
        if (user) {
            // Recalculate user's total deposit amount
            const userDeposits = await Deposit.find({ userId: user._id });
            const totalDepositAmount = userDeposits.reduce((sum, dep) => sum + dep.amount, 0);
            
            user.depositAmount = totalDepositAmount;
            await user.save();
        }

        console.log(`Updated deposit amount: ${amount} for deposit: ${id}`);

        res.status(200).json({
            success: true,
            message: 'Deposit amount updated successfully',
            data: deposit
        });
    } catch (error) {
        console.error('Error updating deposit amount:', error);
        res.status(500).json({ success: false, message: 'Error updating deposit amount', error });
    }
});

// Cleanup Duplicate Deposits (Admin only)
AdminRoute.delete("/deposits/cleanup-duplicates", async (req: any, res: any) => {
    try {
        // Find all deposits
        const allDeposits = await Deposit.find({}).sort({ date: -1 });
        
        // Group by transaction_Id
        const groupedDeposits: { [key: string]: any[] } = {};
        allDeposits.forEach(deposit => {
            if (!groupedDeposits[deposit.transaction_Id]) {
                groupedDeposits[deposit.transaction_Id] = [];
            }
            groupedDeposits[deposit.transaction_Id].push(deposit);
        });
        
        // Find duplicates and keep only the first one
        let deletedCount = 0;
        for (const transactionId in groupedDeposits) {
            const deposits = groupedDeposits[transactionId];
            if (deposits.length > 1) {
                // Keep the first deposit, delete the rest
                const toDelete = deposits.slice(1);
                for (const deposit of toDelete) {
                    await Deposit.findByIdAndDelete(deposit._id);
                    deletedCount++;
                }
            }
        }
        
        console.log(`Cleaned up ${deletedCount} duplicate deposits`);
        
        res.status(200).json({
            success: true,
            message: `Cleaned up ${deletedCount} duplicate deposits`,
            deletedCount
        });
    } catch (error) {
        console.error('Error cleaning up duplicates:', error);
        res.status(500).json({ success: false, message: 'Error cleaning up duplicates', error });
    }
});

// Get Unique Deposits Only (New endpoint)
AdminRoute.get("/deposits/unique", async (req: any, res: any) => {
    try {
        const { page = 1, limit = 1000, status = '' } = req.query;
        
        const query = status ? { status } : {};

        console.log('Fetching unique deposits with query:', query);

        // Use aggregation to get unique deposits
        const uniqueDeposits = await Deposit.aggregate([
            { $match: query },
            {
                $group: {
                    _id: "$transaction_Id",
                    deposit: { $first: "$$ROOT" }
                }
            },
            {
                $replaceRoot: {
                    newRoot: "$deposit"
                }
            },
            { $sort: { date: -1 } },
            { $skip: (page - 1) * limit },
            { $limit: limit * 1 }
        ]);

        console.log('Raw unique deposits from aggregation:', uniqueDeposits.length);

        // Populate user data
        const depositsWithUser = await Deposit.populate(uniqueDeposits, {
            path: 'userId',
            select: 'username email'
        });

        // Get total count of unique deposits
        const totalUniqueDeposits = await Deposit.aggregate([
            { $match: query },
            {
                $group: {
                    _id: "$transaction_Id"
                }
            },
            {
                $count: "total"
            }
        ]);

        const totalDeposits = totalUniqueDeposits[0]?.total || 0;

        console.log(`Unique deposits: ${depositsWithUser.length}, Total unique: ${totalDeposits}`);

        res.status(200).json({
            success: true,
            data: {
                deposits: depositsWithUser,
                totalPages: Math.ceil(totalDeposits / limit),
                currentPage: page,
                totalDeposits
            }
        });
    } catch (error) {
        console.error('Error fetching unique deposits:', error);
        res.status(500).json({ success: false, message: 'Error fetching unique deposits', error });
    }
});

// Delete User
AdminRoute.delete("/users/:id", async (req: any, res: any) => {
    try {
        const { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found' });
        }

        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting user', error });
    }
});

// Get User History by Email
AdminRoute.get("/user-history/:email", async (req: any, res: any) => {
  try {
    const { email } = req.params;
    
    // Find user by email
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Get user's deposits
    const deposits = await Deposit.find({ userId: user._id }).sort({ date: 1 });
    const totalDeposits = deposits.reduce((sum, deposit) => sum + (deposit.amount || 0), 0);
    const firstDeposit = deposits.length > 0 ? deposits[0] : null;

    // Get user's withdrawals
    const withdrawals = await Withdraw.find({ userId: user._id }).sort({ createdAt: 1 });
    const totalWithdrawals = withdrawals.reduce((sum, withdraw) => sum + (withdraw.amount || 0), 0);

    // Get user's mining data
    const mines = await Mine.find({ userId: user._id }).sort({ createdAt: 1 });
    const totalMining = mines.reduce((sum, mine) => sum + (mine.amount || 0), 0);

    // Get user's claims
    const claims = await Claim.find({ userId: user._id }).sort({ createdAt: 1 });
    const totalClaims = claims.reduce((sum, claim) => sum + (claim.amount || 0), 0);

    const userHistory = {
      user: {
        username: user.username,
        email: user.email,
        phone: user.phone,
        joinedDate: user.createdAt,
        remainingBalance: user.remainingBalance || 0
      },
      deposits: {
        total: totalDeposits,
        count: deposits.length,
        firstDeposit: firstDeposit ? firstDeposit.date : null,
        allDeposits: deposits
      },
      withdrawals: {
        total: totalWithdrawals,
        count: withdrawals.length,
        allWithdrawals: withdrawals
      },
      mining: {
        total: totalMining,
        count: mines.length,
        allMines: mines
      },
      claims: {
        total: totalClaims,
        count: claims.length,
        allClaims: claims
      }
    };

    res.status(200).json({
      success: true,
      data: userHistory
    });

  } catch (error) {
    console.error('Error fetching user history:', error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch user history"
    });
  }
});

// Create MineCoin for User
AdminRoute.post("/create-minecoin", async (req: any, res: any) => {
  try {
    const { userId, amount = 100 } = req.body; // Default amount 100 USDT
    
    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Check if user already has a mineCoin
    const existingMine = await Mine.findOne({ userId });
    if (existingMine) {
      return res.status(200).json({
        success: true,
        message: "MineCoin already exists",
        data: existingMine
      });
    }

    // Create new mineCoin
    const newMine = new Mine({
      userId,
      amount,
      isStart: false,
      startTime: null,
      status: false
    });

    const savedMine = await newMine.save();

    res.status(201).json({
      success: true,
      message: "MineCoin created successfully",
      data: savedMine
    });

  } catch (error) {
    console.error('Error creating mineCoin:', error);
    res.status(500).json({
      success: false,
      message: "Failed to create mineCoin"
    });
  }
});

// Update User Amounts
AdminRoute.patch("/users/:userId/amounts", async (req: any, res: any) => {
  try {
    const { userId } = req.params;
    const { depositAmount, withdrawalAmount } = req.body;

    // Check if user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    // Update user amounts
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        depositAmount: parseFloat(depositAmount) || 0,
        withdrawalAmount: parseFloat(withdrawalAmount) || 0
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "User amounts updated successfully",
      data: updatedUser
    });

  } catch (error) {
    console.error('Error updating user amounts:', error);
    res.status(500).json({
      success: false,
      message: "Failed to update user amounts"
    });
  }
});



export default AdminRoute; 