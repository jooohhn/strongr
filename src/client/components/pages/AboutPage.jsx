// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

const title = 'About';

const AboutPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'About Strongr.io' },
        { property: 'og:title', content: title }
      ]}
    />
    <Container fluid style={{ marginTop: '1.25vh' }}>
      <Row>
        <h3>About Page</h3>
      </Row>
    </Container>
  </div>);

export default AboutPage;
