// eslint-disable-next-line @typescript-eslint/naming-convention
export interface SendMailData {
  subject: string;
  body: string;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface MailProvider {
  sendMail(data: SendMailData): Promise<void>;
}
