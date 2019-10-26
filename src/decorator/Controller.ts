import { Router } from '../Route';
import { Methods, MetadataKeys } from './enum';
import { Decorator } from './type';

export function Controller(prefix: string): Decorator {
  return function(target: any, key: string, desc: PropertyDescriptor): void {
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

        router[method](`${prefix}${path}`, target.prototype[key]);
      }
    }
  };
}
