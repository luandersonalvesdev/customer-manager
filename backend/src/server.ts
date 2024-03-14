// eslint-disable-next-line import/no-unresolved, import/extensions
import { App } from './app';

const PORT = process.env.PORT || 3001;

new App().start(PORT);
