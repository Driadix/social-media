import { Router } from 'express';
import multerMiddleware from '../middlewares/multer.js';
import { register, login } from '../controllers/auth.js'

const router = Router();

router.post('/signup', multerMiddleware.upload('picture'), register);
router.post('/signin', login);

export default router;
