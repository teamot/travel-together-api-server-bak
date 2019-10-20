import { Router } from 'express';
import { router as noticeRouter } from './notice';

const router = Router();

router.use('/notices', noticeRouter);

export { router };
