// @flow

import React from 'react';
import Helmet from 'react-helmet';

const title = 'F.A.Q.';

const AboutPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Frequently Asked Questions' },
        { property: 'og:title', content: title }
      ]}
    />
    <h1>At FAQ Page</h1>
  </div>);

export default AboutPage;
