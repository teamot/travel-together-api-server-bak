import { Controller, Get, Inject, Mi, Middleware } from '../decorator';
import { Request, Response } from 'express';
import { HelloService } from '../Service/HelloService';
import { NextFunction } from 'connect';

@Controller('/hello')
class HelloController {
  @Inject
  private helloService: HelloService;

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Get('/')
  @Middleware((req: Request, res: Response, next: NextFunction) => {
    console.log('zzzz');
    next();
  })
  @Middleware((req: Request, res: Response, next: NextFunction) => {
    console.log('bebebe');
    next();
  })
  getHello(req: Request, res: Response): void {
    res.send(this.helloService.sayHello());
  }

  @Get('/new')
  newHello(req: Request, res: Response): void {
    res.send('new hello!');
  }
}
