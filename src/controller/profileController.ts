import mongoose from 'mongoose';
import User from '../models/User';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Configure multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = path.join(__dirname, '../../uploads/profiles');
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const userId = req.params.userId;
        const timestamp = Date.now();
        const extension = path.extname(file.originalname);
        // Ensure proper file extension handling
        const filename = `profile_${userId}_${timestamp}${extension}`;
        cb(null, filename);
    }
});

const fileFilter = (req: any, file: any, cb: any) => {
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'];
    if (allowedTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPEG, JPG, PNG, and GIF are allowed.'), false);
    }
};

export const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5 * 1024 * 1024 // 5MB
    }
});

// Upload profile image
export const uploadProfileImage = async (req: any, res: any) => {
    try {
        const { userId } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No image file provided' });
        }

        // Delete old profile image if exists
        if (user.image) {
            const oldImagePath = path.join(__dirname, '../../uploads/profiles', path.basename(user.image));
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        // Update user with new image path
        user.image = `/uploads/profiles/${req.file.filename}`;
        await user.save();

        res.status(200).json({
            message: 'Profile image uploaded successfully',
            imageUrl: user.image,
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image
            }
        });

    } catch (error) {
        console.error('Profile upload error:', error);
        res.status(500).json({ message: 'Error uploading profile image', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

// Update profile information
export const updateProfile = async (req: any, res: any) => {
    try {
        const { userId } = req.params;
        const { username } = req.body;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update username if provided
        if (username && username.trim()) {
            user.username = username.trim();
        }

        await user.save();

        res.status(200).json({
            message: 'Profile updated successfully',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image
            }
        });

    } catch (error) {
        console.error('Profile update error:', error);
        res.status(500).json({ message: 'Error updating profile', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

// Get user profile
export const getProfile = async (req: any, res: any) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'Profile retrieved successfully',
            user
        });

    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Error getting profile', error: error instanceof Error ? error.message : 'Unknown error' });
    }
};

// Delete profile image
export const deleteProfileImage = async (req: any, res: any) => {
    try {
        const { userId } = req.params;

        if (!mongoose.Types.ObjectId.isValid(userId)) {
            return res.status(400).json({ message: 'Invalid user ID' });
        }

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete image file if exists
        if (user.image) {
            const imagePath = path.join(__dirname, '../../uploads/profiles', path.basename(user.image));
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Remove image path from user
        user.image = '';
        await user.save();

        res.status(200).json({
            message: 'Profile image deleted successfully',
            user: {
                _id: user._id,
                username: user.username,
                email: user.email,
                image: user.image
            }
        });

    } catch (error) {
        console.error('Delete profile image error:', error);
        res.status(500).json({ message: 'Error deleting profile image', error: error instanceof Error ? error.message : 'Unknown error' });
    }
}; 