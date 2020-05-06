import cors from 'cors';
import { Api } from "./api/api";
import { TestController } from './api/controllers/TestController';
import { ApiVersioningMiddleware } from './api/middlewares/api-versioning-middleware';

const app = new Api({
  port: 8081,
  controllers: [new TestController()],
  middlewares: [
    cors(),
    ApiVersioningMiddleware({
        acceptedHeaders: ["X-Version", "accept-version"],
        defaultVersion: "1.0.0",
        acceptedVersion: ["1.0.0"]
    })
  ]
});

app.listen();
