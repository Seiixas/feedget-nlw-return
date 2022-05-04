import nodemailer from 'nodemailer';

import { MailProvider, SendMailData } from '../mail-provider';

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '1d4be6fce42bec',
    pass: 'd044943f479fc9',
  },
});

export class NodeMailerMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    const feedback = await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Mateus Seixas <mateuseixas@icloud.com>',
      subject,
      html: body,
    });
  }
}
