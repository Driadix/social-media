import { Router } from 'express';
import authRouter from './auth.js';

const routes = Router();

routes.use('/', authRouter)

export default routes;