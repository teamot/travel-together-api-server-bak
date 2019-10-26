export type DecoratorGenerator = (path: string) => Decorator;
export type Decorator = (
  target: any,
  key: string,
  desc: PropertyDescriptor
) => void;
