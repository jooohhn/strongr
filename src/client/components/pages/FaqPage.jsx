// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

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
    <Container fluid style={{ marginTop: '2vh' }}>
      <Row>
        <h3>FAQ Page</h3>
        -Sources Used
      </Row>
    </Container>
  </div>);

export default AboutPage;
