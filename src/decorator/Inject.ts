import { Inject as iocInject } from 'typescript-ioc';

export function Inject(target: any, key: string) {
  console.log('Inject!');
  return iocInject(target, key);
}
