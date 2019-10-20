import { Router, Request, Response } from 'express';
import { NoticeService } from '../services';
import { Notice } from '../common/types';

const router = Router();
const noticeService = new NoticeService();

router.get('/', (req: Request, res: Response) => {
  res.send('Hello World');
});

router.post('/', async (req: Request, res: Response) => {
  const notice: Notice = {
    title: req.body.title,
    content: req.body.content,
    authorId: +req.body.authorId
  };

  await noticeService.createNotice(notice);
  // res.status(400).send();
  res.status(201).json(notice);
});

export { router };
