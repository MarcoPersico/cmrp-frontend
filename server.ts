import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import compression from 'compression';
import history from 'connect-history-api-fallback';
import expressStaticGzip from 'express-static-gzip';

const app = express();
const port = 9010;
const clientPath = path.join(__dirname, 'dist');

app.use(history());
app.use(bodyParser.json());

app.use(compression());
app.use(
  expressStaticGzip(path.join(clientPath), {
    enableBrotli: false,
  }),
);

app.use([
  '/static/*.woff',
  '/static/*.woff2',
  '/static/*.png',
  '/favicon.ico',
], (req: Request, res: Response, next: NextFunction) => {
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method',
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Cache-Control', 'public, max-age=31536000, immutable');
  next();
});

app.get('/favicon.ico', (req, res) => {
  const icon = path.join(clientPath);
  res.sendFile(icon);
});

app.use(express.static(clientPath));
app.get('*', (req: Request, res: Response) => res.sendFile(path.join(clientPath, 'index.html')));

app.listen(port, () => `Wokring on ${port}`);