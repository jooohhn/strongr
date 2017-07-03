// @flow

import compression from 'compression';
import express from 'express';

import { STATIC_PATH, WEB_PORT } from '../shared/config';
import { isProd } from '../shared/util';
import renderApp from './render-app';

const app = express();

app.use(compression());
// For generated files
app.use(STATIC_PATH, express.static('dist'));
// For static files
app.use(STATIC_PATH, express.static('public'));

app.get('/*', (req, res) => {
  res.send(renderApp());
});

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Server running on port ${WEB_PORT} ${isProd
      ? '(production)'
      : '(development).\nKeep "yarn dev:wds" running in an other terminal'}.`
  );
});
