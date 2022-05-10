import { prisma } from '../../prisma';
import {
  FeedbackCreateData,
  FeedbacksRepository,
} from '../feedbacks-repository';

export class PrismaFeedbacksRepository implements FeedbacksRepository {
  async create({ type, comment, screenshot, severity }: FeedbackCreateData) {
    await prisma.feedback.create({
      data: { type, comment, screenshot, severity },
    });
  }
}
