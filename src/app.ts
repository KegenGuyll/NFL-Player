import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { healthRouter } from './routes/health';

class App {
  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  public app: express.Application;

  private config(): void {
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(bodyParser.json());
    this.app.use(cors());
  }

  private routes(): void {
    this.app.use('/health', healthRouter);
  }
}

export default new App().app;
