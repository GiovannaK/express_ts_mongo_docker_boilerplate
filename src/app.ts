import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export class App {
  private express: express.Application

  private port = process.env.PORT || 3001

  private mongoUri = process.env.MONGO_URI || ''

  constructor() {
    this.express = express();
    this.middlewares();
    this.listen();
    this.database();
  }

  public getApp(): express.Application {
    return this.express;
  }

  private middlewares(): void {
    this.express.use(express.json());
  }

  private listen(): void {
    this.express.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  private database(): void {
    mongoose.connect(this.mongoUri);
    console.log('MongoDB connected');
  }
}
