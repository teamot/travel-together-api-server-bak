import { RequestHandler } from 'express';

export interface RouteHandlerDescriptor {
  value?: RequestHandler;
}

export type PropertyDecorator = (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => void;

export type ClassDecorator = (target: Function) => void;
