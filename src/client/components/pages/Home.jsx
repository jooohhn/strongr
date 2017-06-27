// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { APP_NAME } from '../../../shared/config';

const HomePage = () =>
  (<div>
    <Helmet
      meta={[
        { name: 'description', content: 'At HomePage of Hello App' },
        { property: 'og:title', content: APP_NAME }
      ]}
    />
    <h1>At Home Page</h1>
  </div>);

export default HomePage;
