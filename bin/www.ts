import * as http from 'http';
import { app } from '../app';

const port: number = 3000;
http.createServer(app).listen(port, (): void => {
  console.log(`Listening on port ${port}`);
});
