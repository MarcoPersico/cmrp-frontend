import express, { Request, Response } from 'express';
// eslint-disable-next-line @typescript-eslint/camelcase
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';
import history from 'connect-history-api-fallback';
import expressStaticGzip from 'express-static-gzip';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import config from './webpack.dev';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      SECRET_KEY: string;
      NODE_ENV: 'development' | 'production';
      PORT?: string;
    }
  }
}
process.env.SECRET_KEY = '!16196429$38644923!';

const app = express();
const port = process.env.PORT || 9010;
const clientPath = path.join(__dirname, '..', 'dist');
const compiler = webpack(config);

app.use(history());
app.use(bodyParser.json());

app.use(compression());
app.use(
  expressStaticGzip(path.join(clientPath), {
    enableBrotli: false,
  }),
);

// App Startup
app.get('/favicon.ico', (req, res) => {
  let icon;
  if (port === 9010) {
    icon = path.join(__dirname, '..', 'client', 'favicon.ico');
  } else {
    icon = path.join(clientPath);
  }
  res.sendFile(icon);
});
if (port === 9010) {
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output?.publicPath || '/',
  }));
} else {
  app.use(express.static(clientPath));
  app.get('*', (req: Request, res: Response) => res.sendFile(path.join(clientPath, 'index.html')));
}

app.listen(port, () => `Wokring on ${port}`);
