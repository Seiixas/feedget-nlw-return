import { MailProvider } from '../providers/mail-provider/mail-provider';
import { FeedbacksRepository } from '../repositories/feedbacks-repository';

interface IRequest {
  type: string;
  comment: string;
  screenshot?: string;
}

export class SubmitFeedbackUseCase {
  constructor(
    private feedbacksRepository: FeedbacksRepository,
    private mailProvider: MailProvider
  ) {}

  async execute({ type, comment, screenshot }: IRequest) {
    await this.feedbacksRepository.create({ type, comment, screenshot });

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
