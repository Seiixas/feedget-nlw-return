import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { SubmitFeedbackUseCase } from './submit-feedback-use-case';

export class SubmitFeedbackController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { type, comment, screenshot } = request.body;

    const submitFeedbackUseCase = container.resolve(SubmitFeedbackUseCase);

    await submitFeedbackUseCase.execute({ type, comment, screenshot });

    return response.status(201).send();
  }
}
