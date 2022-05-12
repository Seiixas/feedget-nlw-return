import { Request, Response } from "express";
import { container } from "tsyringe";
import { MarkFeedbackDoneUseCase } from "./mark-feeback-done-use-case";

export class MarkFeedbackDoneController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const markFeedbackDoneUseCase = container.resolve(MarkFeedbackDoneUseCase);

    await markFeedbackDoneUseCase.execute(id);

    return response.send();
  }
}