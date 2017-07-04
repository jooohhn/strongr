// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'reactstrap';

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
    <Container fluid style={{ marginTop: '1.25vh' }}>
      <Row>
        <h3>FAQ Page</h3>
        <p>-Sources used</p>
        <p>-How are ORMs calculated</p>
      </Row>
    </Container>
  </div>);

export default AboutPage;
