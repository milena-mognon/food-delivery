import { Router } from 'express';
import userRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

/**
 * add routes
 */
routes.use('/session', sessionsRouter);
routes.use('/users', userRouter);

export default routes;
