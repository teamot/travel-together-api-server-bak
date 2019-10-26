import { Router } from '../Router';
import { Methods, MetadataKeys } from './enum';
import { ClassDecorator } from './type';

export function Controller(prefix: string): ClassDecorator {
  return function(target: Function): void {
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
