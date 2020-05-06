import express, { Application } from 'express';
import { ApiController } from './abstracts/api-controller';
import { ApiInit } from './interfaces/ApiInit';

export class Api {
    private app: Application;
    private port: number;
  
    constructor(init: ApiInit) {
      this.app = express();
      this.port = init.port;
      this.useMiddleWares(init.middlewares);
      this.useRoutes(init.controllers);
    }
  
    private useMiddleWares(middlewares: any[]): void {
      if (middlewares && middlewares.length) {
        middlewares.forEach((middleware) => {
          this.app.use(middleware);
        });
      }
    }
  
    private useRoutes(controllers: ApiController[]): void {
      if (controllers && controllers.length) {
        controllers.forEach((controller) => {
          this.app.use("/", controller.router);
        });
      }
    }
  
    
    public listen(): void {
      this.app.listen(this.port, () => {
        console.log(`App listening on the http://localhost:${this.port}`);
      });
    }
  }
  