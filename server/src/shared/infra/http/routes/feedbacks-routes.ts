import { Router } from 'express';

import { SubmitFeedbackController } from '../../../../use-cases/submit-feedback/submit-feedback-controller';

const feedbacksRouter = Router();

const submitFeedbackController = new SubmitFeedbackController();

feedbacksRouter.post('/feedbacks', submitFeedbackController.handle);

export { feedbacksRouter };
