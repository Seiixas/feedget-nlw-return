import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListFeedbacksUseCase } from "./list-feedbacks-use-case";

export class ListFeedbacksController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listFeedbacksUseCase = container.resolve(ListFeedbacksUseCase);

    const feedbacks = await listFeedbacksUseCase.execute();

    return response.json(feedbacks);
  }
}