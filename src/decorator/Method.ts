import { Methods, MetadataKeys } from './enum';
import { Decorator, DecoratorGenerator } from './type';

function bindMethod(method: string): DecoratorGenerator {
  return function(path: string): Decorator {
    return function(target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const Get = bindMethod(Methods.GET);
export const Post = bindMethod(Methods.POST);
export const Put = bindMethod(Methods.PUT);
export const Patch = bindMethod(Methods.PATCH);
export const Delete = bindMethod(Methods.DELETE);
