import express from 'express';

export class Router {
  private static router = express.Router();
  public static getInstance(): express.Router {
    return this.router;
  }

  private constructor() {}
}
