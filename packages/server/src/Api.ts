/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import cors from 'cors';
import express, { Express } from 'express';
import path from 'path';

import routes from './routes';

export default class Api {
  server: Express;

  constructor() {
    this.server = express();
    this.cors();
    this.middleware();
    this.routes();
  }

  cors() {
    this.server.use(cors());
    /* set optional cors
    {
      origin:'http://host'
    }
    */
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use('/v1', routes);
    this.server.use(
      '/uploads',
      express.static(path.join(__dirname, '..', 'uploads'))
    );
  }

  init() {
    const port = process.env.PORT_APP || 3333;
    this.server.listen(port, () => {
      // eslint-disable-next-line no-console
      console.log(`Server running in port: ${port}`);
    });
  }
}
