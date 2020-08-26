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

app.use('/:-Infinity', (req: Request, res: Response, next: NextFunction) => {
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
