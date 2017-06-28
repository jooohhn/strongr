// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';
import { APP_NAME } from '../../../shared/config';

const HomePage = () =>
  (<div>
    <Helmet
      meta={[
        {
          name: 'description',
          content: "Calculate 1RM's and Workout Programs"
        },
        { property: 'og:title', content: APP_NAME }
      ]}
    />
    <h1>At Home Page</h1>
    <Button color="danger">Danger!</Button>
  </div>);

export default HomePage;
