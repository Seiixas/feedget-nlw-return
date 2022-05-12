import { inject, injectable } from "tsyringe";
import { FeedbacksRepository } from "../../repositories/feedbacks-repository";
import { AppError } from "../../shared/errors/AppError";

@injectable()
export class MarkFeedbackDoneUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private readonly feedbacksRepository: FeedbacksRepository
  ) {}

  async execute(id: string): Promise<void> {
    const feedback = await this.feedbacksRepository.findById(id);

    if (!feedback) {
      throw new AppError('Feedback not found', 404);
    }

    await this.feedbacksRepository.markDone(feedback.id);
  }
}