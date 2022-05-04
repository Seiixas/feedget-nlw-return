import express from 'express';

import { prisma } from './prisma';

const server = express();

server.use(express.json());

server.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body;

  const feedback = await prisma.feedback.create({
    data: { type, comment, screenshot },
  });

  return res.status(201).json({ data: feedback });
});

server.listen(3333, () => {
  console.log('Server is now running');
});
