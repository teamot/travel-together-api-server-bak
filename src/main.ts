import { AppModule } from './modules';
import { NestFactory } from '@nestjs/core';
import chalk from 'chalk';

async function start() {
  const app = await NestFactory.create(AppModule);

  process.on('SIGTERM', function() {
    return app.close().then(() => process.exit(1));
  });

  process.on('SIGINT', function() {
    return app.close().then(() => process.exit(1));
  });

  const port = process.env.PORT || 8083;

  console.log(chalk.yellowBright(`PORT IS ${port}`));
  await app.listen(port);
}

start();
