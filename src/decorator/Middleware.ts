import 'reflect-metadata';
import { PropertyDecorator, RouteHandlerDescriptor } from './type';
import { RequestHandler } from 'express';
import { MetadataKeys } from './enum';

export function Middleware(middleware: RequestHandler): PropertyDecorator {
  return function(
    target: any,
    key: string,
    desc: RouteHandlerDescriptor
  ): void {
    const middlewares: RequestHandler[] =
      Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];
    middlewares.unshift(middleware);

    Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, middlewares, target, key);
  };
}
