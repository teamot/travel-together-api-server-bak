import {
  Injectable,
  NestMiddleware,
  HttpException,
  HttpStatus,
  CanActivate,
  ExecutionContext
} from '@nestjs/common';
import { Request, Response } from 'express';
import { decodeToken } from '../core/auth';
import { Headers } from '../constants';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  public async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.header(Headers.AUTHORIZATION);

    const payload = await decodeToken(token);
    if (!payload) {
      return false;
    }

    request.body.jwtPayload = payload;
    return true;
  }
}
