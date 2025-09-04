import { Router } from 'express';
import { uploadProfileImage, getProfile, upload } from '../controller/simpleProfileController';

const SimpleProfileRoute = Router();

// Upload profile image
SimpleProfileRoute.post('/upload/:userId', upload.single('image'), uploadProfileImage);

// Get user profile
SimpleProfileRoute.get('/:userId', getProfile);

export default SimpleProfileRoute; 