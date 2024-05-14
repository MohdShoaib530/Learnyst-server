import { Router } from 'express';
import { changeEmail, changePassword, forgotPassword, loginUser, logoutUser, registerUser, resetPassword, updateAvatar, updateCoverImage, updateEmail, updateName, userData } from '../controllers/user.controller.js';
import upload from '../middleware/multer.middleware.js';
import isLoggedIn from '../middleware/auth.middleware.js';
const router = Router();

router.route('/register').post(
    upload.fields(
        [
            { name: 'avatar', maxCount: 1 },
            { name: 'coverImage', maxCount: 1 }
        ]
    ), registerUser);

router.route('/login').post(loginUser);
router.route('/logout').post(isLoggedIn, logoutUser);
router.route('/profile').get(isLoggedIn, userData)
router.route('/reset-password').post(forgotPassword)
router.route('/reset-password/:resetToken').post(resetPassword);
router.route('/chanage-password').post(isLoggedIn, changePassword);
router.route('/update-username').post(isLoggedIn, updateName)
router.route('/update-email').post(isLoggedIn, updateEmail)
router.route('/change-email/:resetToken').post(changeEmail)
router.route('/update-avatar').post(isLoggedIn, upload.single('avatar'), updateAvatar)
router.route('/update-coverImage').post(isLoggedIn, upload.single('coverImage'), updateCoverImage)


export default router;
