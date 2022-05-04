import { inject, injectable } from 'tsyringe';

import { FeedbacksRepository } from '../../repositories/feedbacks-repository';
import { MailProvider } from '../../shared/container/providers/mail-provider/mail-provider';

interface IRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

@injectable()
export class SubmitFeedbackUseCase {
  constructor(
    @inject('FeedbacksRepository')
    private feedbacksRepository: FeedbacksRepository,
    @inject('MailProvider')
    private mailProvider: MailProvider
  ) {}

  async execute({ type, comment, screenshot }: IRequest) {
    await this.feedbacksRepository.create({ type, comment, screenshot });

    if (!type) {
      throw new Error('Type is required');
    }

    if (!comment) {
      throw new Error('Comment is required');
    }

    if (screenshot && !screenshot.startsWith('data:image/png;base64')) {
      throw new Error('Invalid screenshot format');
    }

    await this.mailProvider.sendMail({
      subject: 'Novo feedback',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>Tipo do feedback ${type}</p>`,
        `<p>Comentário ${comment}</p>`,
        `</div>`,
      ].join('\n'),
    });
  }
}
