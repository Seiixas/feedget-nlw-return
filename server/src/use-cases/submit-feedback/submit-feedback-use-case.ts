import 'dotenv/config';

import { inject, injectable } from 'tsyringe';

import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { MailProvider } from '../../shared/container/providers/mail-provider/mail-provider';
import { AppError } from '../../shared/errors/AppError';
import { handleEmailBody } from '../../utils/email-body-handler';

interface IRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

const mailProvider = process.env.ENVIRONMENT === 'DEV' ? 'NodeMailerMailProvider' : 'MailGunMailProvider';

@injectable()
export class SubmitFeedbackUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private readonly feedbacksRepository: FeedbacksRepository,
    @inject(mailProvider)
    private readonly mailProvider: MailProvider,
  ) { }

  async execute({ type, comment, screenshot }: IRequest) {
    await this.feedbacksRepository.create({ type, comment, screenshot });

    if (!type) {
      throw new AppError('Type is required');
    }

    if (!comment) {
      throw new AppError('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new AppError('Invalid screenshot format');
    }

    const emailBody = handleEmailBody({ comment, type, screenshot });

    await this.mailProvider.sendMail({
      subject: '[Feedget] Novo Feedback!',
      body: emailBody,
    });
  }
}
