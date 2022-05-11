import { User } from '@prisma/client';
import { inject, injectable } from 'tsyringe';
import { prisma } from '../../prisma';
import { UsersCreateData, UsersRepository } from '../users-repository';


export class PrismaUsersRepository implements UsersRepository {
  async create({ email, password }: UsersCreateData) {
    await prisma.user.create({
      data: { email, password },
    });
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    return user;
  }

  async findById(id: string): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id }
    })

    return user;
  }
}
