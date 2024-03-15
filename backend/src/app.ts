import * as express from 'express';
import router from './routes';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    this.routes();

    this.app.get('/', (_req: express.Request, res: express.Response) => {
      res.send('Server is healthy! <a href="https://github.com/luandersonalvesdev/customer-manager"> Click here</a> to see the documentation.');
    });
  }

  private routes(): void {
    this.app.use(router);
  }

  private config() {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

export const { app } = new App();
