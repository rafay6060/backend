import { Router } from 'express';
import { 
    uploadProfileImage, 
    updateProfile, 
    getProfile, 
    deleteProfileImage,
    upload 
} from '../controller/profileController';

const ProfileRoute = Router();

// Profile routes
ProfileRoute.get('/:userId', getProfile);
ProfileRoute.patch('/:userId', updateProfile);
ProfileRoute.post('/upload/:userId', upload.single('image'), uploadProfileImage);
ProfileRoute.delete('/image/:userId', deleteProfileImage);

export default ProfileRoute; 