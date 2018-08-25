import * as compression from 'compression';
import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as helmet from 'helmet';
import * as path from 'path';
import * as Loadable from 'react-loadable';
import * as webpack from 'webpack';
import * as webpackDevMiddleware from 'webpack-dev-middleware';
import * as webpackHotMiddleware from 'webpack-hot-middleware';
import * as webpackDev from '../../config/webpack.dev.js';
import Routes from './handlerDev';
import ProdRoutes from './handlerProd';
dotenv.config();

const normalizePort = (port: string) => parseInt(port, 10);
const PORT = normalizePort(process.env.PORT || '3000');
const app = express();
const isProd = process.env.NODE_ENV === 'production';
const isServer = process.env.NODE_ENV === 'server';

app.use(compression());
app.use(helmet());
app.use(cookieParser());
app.use(
  cors({
    origin: 'http://localhost:3000',
  }),
);

process.stdin.resume(); // so the program will not close instantly

function exitHandler(options: any, err: any) {
  if (options.cleanup) {
    process.stdout.write('clean');
  }
  if (err) {
    process.stdout.write(err.stack);
  }
  if (options.exit) {
    process.exit();
  }
}

// do something when app is closing
process.on('exit', exitHandler.bind(null, { cleanup: true }));

// catches ctrl+c event
process.on('SIGINT', exitHandler.bind(null, { exit: true }));

// catches "kill pid" (for example: nodemon restart)
process.on('SIGUSR1', exitHandler.bind(null, { exit: true }));
process.on('SIGUSR2', exitHandler.bind(null, { exit: true }));

// catches uncaught exceptions
process.on('uncaughtException', exitHandler.bind(null, { exit: true }));

app.get('/api/filters', (_req: express.Request, res: express.Response) => {
  const data = [
    { id: 1, title: 'Some filter', slug: 'some-filter' },
    { id: 2, title: 'Another', slug: 'another' },
    { id: 3, title: 'Moto', slug: 'moto' },
    { id: 4, title: 'Cars', slug: 'cars' },
  ];

  return res.status(200).json(data);
});

if (!isProd && !isServer) {
  const config: any = webpackDev;
  const compiler = webpack(config);
  const options: any = {
    serverSideRender: true,
    stats: {
      colors: true,
    },
  };
  app.use(webpackDevMiddleware(compiler, options));
  app.use(webpackHotMiddleware(compiler));
  app.use('/', Routes);
  Loadable.preloadAll().then(() => {
    app.listen(PORT, () => process.stdout.write(`Server started with port: ${PORT} \n`));
  });
} else {
  app.use(express.static(path.join(__dirname, '..', '..', 'dist'), { redirect: false }));
  app.use('/', ProdRoutes);

  Loadable.preloadAll().then(() => {
    app.listen(PORT, () => process.stdout.write(`Started production with port: ${PORT} \n`));
  });
}
