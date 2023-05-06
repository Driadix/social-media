import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import postRouter from './post.js';
import authHandler from '../middlewares/auth.js';

const routes = Router();

routes.use('/', authRouter);
routes.use('/users', authHandler, userRouter);
routes.use('/posts', authHandler, postRouter);

export default routes;
