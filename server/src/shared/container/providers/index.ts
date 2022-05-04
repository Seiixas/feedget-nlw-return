import { container } from 'tsyringe';

import { NodeMailerMailProvider } from './mail-provider/implementations/nodemailer-mail-provider';
import { MailProvider } from './mail-provider/mail-provider';

container.registerSingleton<MailProvider>(
  'MailProvider',
  NodeMailerMailProvider
);
