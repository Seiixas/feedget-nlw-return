import { container } from 'tsyringe';

import './providers';

import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { PrismaFeedbacksRepository } from '../../repositories/prisma/prisma-feedbacks-repository';
import { MailGunMailProvider } from './providers/mail-provider/implementations/mailgun-mail-provider';
import { NodeMailerMailProvider } from './providers/mail-provider/implementations/nodemailer-mail-provider';
import { MailProvider } from './providers/mail-provider/mail-provider';

const mailProvider = {
  mailgun: MailGunMailProvider,
  ethereal: NodeMailerMailProvider,
};

container.registerSingleton<MailProvider>("MailProvider", mailProvider[process.env.MAIL_PROVIDER]);

container.registerSingleton<FeedbacksRepository>(
  'FeedbacksRepository',
  PrismaFeedbacksRepository
);
