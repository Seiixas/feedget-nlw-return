import { Router } from 'express';
import { ListFeedbacksController } from '../../../../use-cases/list-feedbacks/list-feedbacks-controller';
import { MarkFeedbackDoneController } from '../../../../use-cases/mark-feedback-done/mark-feeback-done-controller';
import { MarkFeedbackUndoController } from '../../../../use-cases/mark-feedback-undo/mark-feeback-undo-controller';

import { SubmitFeedbackController } from '../../../../use-cases/submit-feedback/submit-feedback-controller';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const feedbacksRouter = Router();

const submitFeedbackController = new SubmitFeedbackController();
const listFeedbacksController = new ListFeedbacksController();
const markFeedbackDoneController = new MarkFeedbackDoneController();
const markFeedbackUndoController = new MarkFeedbackUndoController();

feedbacksRouter.post('/feedbacks', submitFeedbackController.handle);
feedbacksRouter.get('/feedbacks', ensureAuthenticated, listFeedbacksController.handle);
feedbacksRouter.patch('/feedbacks/:id/done', markFeedbackDoneController.handle);
feedbacksRouter.patch('/feedbacks/:id/undone', markFeedbackUndoController.handle);

export { feedbacksRouter };
