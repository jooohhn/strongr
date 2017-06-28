// @flow

import React from 'react';
import Helmet from 'react-helmet';

const title = 'Page Not Found';

const NotFoundPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Content not found' },
        { property: 'og:title', content: title }
      ]}
    />
    <h1>At Not Found</h1>
  </div>);

export default NotFoundPage;
