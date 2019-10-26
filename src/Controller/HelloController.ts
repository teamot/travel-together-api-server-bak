import { Controller, Get, Inject } from '../decorator';
import { Request, Response } from 'express';
import { HelloService } from '../Service/HelloService';

@Controller('/hello')
class HelloController {
  @Inject
  private helloService: HelloService;

  constructor(helloService: HelloService) {
    this.helloService = helloService;
  }

  @Get('/')
  getHello(req: Request, res: Response): void {
    res.send(this.helloService.sayHello());
  }

  @Get('/new')
  newHello(req: Request, res: Response): void {
    res.send('new hello!');
  }
}
