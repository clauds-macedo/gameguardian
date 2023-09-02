import express, { Express } from "express";
import routes from "./routes/routes";

const port = 3000;

class App {
  server: Express;
  constructor () {
    this.server = express();
    this.server.use(routes);
    this.server.use(express.json());
  }

  listen() {
    this.server.listen(port, () => {
      console.log(`Server is running at http://localhost:${port}`);
    });
  }
}

export default new App();
