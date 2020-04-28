import { Router } from 'express';
import userRouter from './users.routes';

const routes = Router();

/**
 * add routes
 */

routes.use('/users', userRouter);

export default routes;
