import express, { Request, Response } from 'express';
import { router } from './routes';
import bodyParser from 'body-parser';

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const router = express.Router();
app.use(router);

// app.use('/', router);

export { app };
