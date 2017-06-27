// @flow

import React from 'react';
import Helmet from 'react-helmet';
import Message from '../../components/Message';

const title = 'Hello Page';

const HelloPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'A page to say hello' },
        { property: 'og:title', content: title }
      ]}
    />
    <h1>At HelloPage</h1>
    <Message message="Hello World" />
  </div>);

export default HelloPage;
