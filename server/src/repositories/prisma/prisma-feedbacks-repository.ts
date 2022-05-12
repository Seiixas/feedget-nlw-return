import { Feedback } from '@prisma/client';
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

  async list(): Promise<Feedback[]> {
    const feedbacks = await prisma.feedback.findMany({ 
      orderBy: [
        {
          created_at: 'asc'
        }
      ], 
    });

    return feedbacks;
  }

  async findById(id: string): Promise<Feedback | null> {
    const feedback = await prisma.feedback.findUnique({
      where: { id }
    });

    return feedback;
  }

  async markDone(id: string): Promise<void> {
    await prisma.feedback.update({
      where: { id },
      data: { is_solved: true }
    });
  }

  async markUndone(id: string): Promise<void> {
    await prisma.feedback.update({
      where: { id },
      data: { is_solved: false }
    });
  }
}
