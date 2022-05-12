import { Request, Response } from "express";
import { container } from "tsyringe";
import { MarkFeedbackUndoUseCase } from "./mark-feeback-undo-use-case";

export class MarkFeedbackUndoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const markFeedbackUndoUseCase = container.resolve(MarkFeedbackUndoUseCase);

    await markFeedbackUndoUseCase.execute(id);

    return response.send();
  }
}