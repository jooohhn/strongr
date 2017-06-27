// @flow
import Helmet from 'react-helmet';
import { APP_CONTAINER_CLASS, STATIC_PATH, WDS_PORT } from '../shared/config';
import { isProd } from '../shared/util';

const renderApp = () => {
  const head = Helmet.rewind();
  return `<!doctype html>
<html>
  <head>
     ${head.title}
     ${head.meta}
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <div class="${APP_CONTAINER_CLASS}"></div>
    <script src="${isProd
      ? STATIC_PATH
      : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
  </body>
</html>`;
};

export default renderApp;
