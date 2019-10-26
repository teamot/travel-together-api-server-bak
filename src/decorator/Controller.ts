import { Router } from '../Router';
import { Methods, MetadataKeys } from './enum';
import { ClassDecorator } from './type';
import { RequestHandler } from 'express';

export function Controller(prefix: string): ClassDecorator {
  return function(target: any): void {
    const router = Router.getInstance();

    for (const key in target.prototype) {
      const path: string | null = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );

      if (path) {
        const method: Methods = Reflect.getMetadata(
          MetadataKeys.METHOD,
          target.prototype,
          key
        );

        const middlewares: RequestHandler[] =
          Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
          [];

        router[method](
          `${prefix}${path}`,
          ...middlewares,
          target.prototype[key].bind(target.prototype)
        );
      }
    }
  };
}
