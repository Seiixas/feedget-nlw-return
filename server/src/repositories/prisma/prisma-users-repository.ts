import { prisma } from '../../prisma';
import { UsersCreateData, UsersRepository } from '../users-repository';

export class PrismaFeedbacksRepository implements UsersRepository {
  async create({ username, password }: UsersCreateData) {
    await prisma.user.create({
      data: { username, password },
    });
  }
}
