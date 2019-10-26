import 'reflect-metadata';
import './Controller';
import express from 'express';
import http from 'http';
import { Router } from './Router';

export class App {
  public port: number = process.env.PORT ? +process.env.PORT : 3001;

  private readonly app: express.Application;
  private server: http.Server | null = null;

  constructor() {
    this.app = express();
    this.app.use(Router.getInstance());
  }

  public async start() {
    return new Promise<void>((resolve, reject) => {
      this.server = this.app.listen(this.port, err => {
        if (err) {
          reject(err);
        }

        console.log(`Listening on port ${this.port}.`);
        resolve();
      });
    });
  }
}
