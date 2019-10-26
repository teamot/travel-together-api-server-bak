import { RequestHandler } from 'express';
import { Methods, MetadataKeys } from './enum';
import { Decorator, DecoratorGenerator } from './type';

interface RouteHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function bindMethod(method: string) {
  return function(path: string): Decorator {
    return function(target: any, key: string, desc: RouteHandlerDescriptor) {
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
