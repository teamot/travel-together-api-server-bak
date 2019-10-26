import { App } from './app';

async function start() {
  const app = new App();
  await app.start();
}

start().catch(err => {
  console.error(err);
});
