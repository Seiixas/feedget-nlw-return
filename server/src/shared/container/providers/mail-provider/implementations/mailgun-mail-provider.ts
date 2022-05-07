import 'dotenv/config';

import mailgun from 'mailgun-js';

import { MailProvider, SendMailData } from '../mail-provider';

const APY_KEY = String(process.env.MAILGUN_API_KEY);
const DOMAIN = String(process.env.MAILGUN_DOMAIN);

const transport = mailgun({
  apiKey: APY_KEY,
  domain: DOMAIN
});

export class MailGunMailProvider implements MailProvider {
  async sendMail({ subject, body }: SendMailData): Promise<void> {
    await transport.messages().send({
        from: `Mailgun Sandbox <postmaster@${DOMAIN}>`,
        to: 'Mateus Seixas <mateuseixas@icloud.com>',
        subject,
        html: body,
      }, function (error, body) {});
  }
}
