import { Router } from 'express';

import { feedbacksRouter } from './feedbacks-routes';
import { usersRouter } from './users-routes';

const routes = Router();

routes.use(feedbacksRouter);
routes.use(usersRouter);

export { routes };
