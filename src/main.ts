import { AppModule } from './modules';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import chalk from 'chalk';

async function start() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix('/tt/api/v1');

  process.on('SIGTERM', function() {
    return app.close().then(() => process.exit(1));
  });

  process.on('SIGINT', function() {
    return app.close().then(() => process.exit(1));
  });

  const port = process.env.PORT || 3000;

  console.log(chalk.yellowBright(`PORT IS ${port}`));
  await app.listen(port);
}

start();
