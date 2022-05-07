import { container } from 'tsyringe';
import { MailGunMailProvider } from './mail-provider/implementations/mailgun-mail-provider';

import { NodeMailerMailProvider } from './mail-provider/implementations/nodemailer-mail-provider';
import { MailProvider } from './mail-provider/mail-provider';

container.registerSingleton<MailProvider>(
  'NodeMailerMailProvider',
  NodeMailerMailProvider
);

container.registerSingleton<MailProvider>(
  'MailGunMailProvider',
  MailGunMailProvider
);
