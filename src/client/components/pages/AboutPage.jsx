// @flow

import React from 'react';
import Helmet from 'react-helmet';

const title = 'Hello Page';

const AboutPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'About Strongr.io' },
        { property: 'og:title', content: title }
      ]}
    />
    <h1>At About page</h1>
  </div>);

export default AboutPage;
