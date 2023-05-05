import { Router } from 'express';
import authRouter from './auth.js';
import userRouter from './user.js';
import authHandler from '../middlewares/auth.js';

const routes = Router();

routes.use('/', authRouter);
routes.use('/user', authHandler, userRouter);

export default routes;
