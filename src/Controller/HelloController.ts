import { Controller, Get } from '../decorator';
import { Request, Response } from 'express';

@Controller('/hello')
class HelloController {
  @Get('/')
  getHello(req: Request, res: Response): void {
    res.send('HELLO!!!');
  }

  @Get('/new')
  newHello(req: Request, res: Response): void {
    res.send('new hello!');
  }
}
