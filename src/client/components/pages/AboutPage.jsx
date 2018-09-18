// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'reactstrap';

const title = 'About';

const AboutPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'About Strongr.io' },
        { property: 'og:title', content: title }
      ]}
    />
    <Container fluid style={{ marginTop: '1.75vh', paddingLeft: '55px' }}>
      <Row>
        <h4>What is Strongr?</h4>
      </Row>
      <Row>
        <p>
          Strongr is a weightraining routine generator that allows users to use
          and share their exericise templates.
        </p>
      </Row>
    </Container>
  </div>
);

export default AboutPage;
