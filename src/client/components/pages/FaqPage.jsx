// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'reactstrap';

const title = 'F.A.Q.';

const AboutPage = () => (
  <div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Frequently Asked Questions' },
        { property: 'og:title', content: title }
      ]}
    />
    <Container fluid style={{ marginTop: '1.75vh', paddingLeft: '50px' }}>
      <Row>
        <h4>How Do I Use Strongr</h4>
      </Row>
      <Row>
        <p>
          Input your current strength levels and desired template and allow the
          app to generate and exercise routine for you.
        </p>
      </Row>
    </Container>
  </div>
);

export default AboutPage;
