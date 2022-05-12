import { Feedback } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { FeedbacksRepository } from "../../repositories/feedbacks-repository";

@injectable()
export class ListFeedbacksUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private readonly feedbacksRepository: FeedbacksRepository
  ) {}

  async execute(): Promise<Feedback[]> {
    const feedbacks = await this.feedbacksRepository.list();

    return feedbacks;
  }
}