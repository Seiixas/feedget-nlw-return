import { Router } from 'express';

import { feedbacksRouter } from './feedbacks-routes';

const routes = Router();

routes.use(feedbacksRouter);

export { routes };
