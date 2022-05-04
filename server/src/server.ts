import express from 'express';
import nodemailer from 'nodemailer';

import { prisma } from './prisma';

const server = express();

server.use(express.json());

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: '1d4be6fce42bec',
    pass: 'd044943f479fc9',
  },
});

server.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: { type, comment, screenshot },
  });

  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Mateus Seixas <mateuseixas@icloud.com>',
    subject: 'Novo feedback',
    html: [
      `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
      `<p>Tipo do feedback ${type}</p>`,
      `<p>Comentário ${comment}</p>`,
      `</div>`,
    ].join('\n'),
  });

  return res.status(201).json({ data: feedback });
});

server.listen(3333, () => {
  console.log('Server is now running');
});
