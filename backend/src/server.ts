import express, { Express } from "express";
import routes from "./routes";
import { JobsManager } from "./JobsManager";

const port = 3000;

class Server {
  server: Express;
  constructor() {
    this.server = express();
    this.server.use(routes);
    this.server.use(express.json());
  }

  listen() {
    this.server.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
      new JobsManager().run();
    });

  }
}

export default new Server();
