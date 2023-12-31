import express from 'express';
import routes from './routes';
import mongoose from 'mongoose';
import path from 'path';
import cors from 'cors';

class App {
  constructor() {
    this.server = express();

    mongoose.connect('mongodb+srv://devhouse:devhouse@devhouse.xoe1p75.mongodb.net/devhouse?retryWrites=true&w=majority'
    );

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(cors())
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..','uploads'))
    );
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
