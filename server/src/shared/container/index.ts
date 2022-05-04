import { container } from 'tsyringe';

import './providers';

import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { PrismaFeedbacksRepository } from '../../repositories/prisma/prisma-feedbacks-repository';

container.registerSingleton<FeedbacksRepository>(
  'FeedbacksRepository',
  PrismaFeedbacksRepository
);
