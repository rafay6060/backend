import multer from 'multer';
import path from 'path';
import fs from 'fs';
import User from '../models/User';

// Simple multer setup
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadDir = 'uploads';
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir);
        }
        cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueName + path.extname(file.originalname));
    }
});

export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
    fileFilter: (req, file, cb) => {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        } else {
            cb(new Error('Only images allowed'));
        }
    }
});

// Upload profile image
export const uploadProfileImage = async (req: any, res: any) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: 'No image uploaded' });
        }

        const userId = req.params.userId;
        const imagePath = `/uploads/${req.file.filename}`;

        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Delete old image if exists
        if (user.image && user.image !== '/uploads/default.png') {
            const oldPath = path.join(__dirname, '../../', user.image);
            if (fs.existsSync(oldPath)) {
                fs.unlinkSync(oldPath);
            }
        }

        user.image = imagePath;
        await user.save();

        res.status(200).json({
            message: 'Profile image uploaded successfully',
            image: imagePath
        });
    } catch (error) {
        console.error('Upload error:', error);
        res.status(500).json({ message: 'Upload failed' });
    }
};

// Get user profile
export const getProfile = async (req: any, res: any) => {
    try {
        const userId = req.params.userId;
        const user = await User.findById(userId).select('username image');
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            username: user.username,
            image: user.image || '/uploads/default.png'
        });
    } catch (error) {
        console.error('Get profile error:', error);
        res.status(500).json({ message: 'Failed to get profile' });
    }
}; 