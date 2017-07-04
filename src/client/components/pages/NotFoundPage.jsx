// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row } from 'reactstrap';

const title = 'Page Not Found';

const NotFoundPage = () =>
  (<div>
    <Helmet
      title={title}
      meta={[
        { name: 'description', content: 'Content not found' },
        { property: 'og:title', content: title }
      ]}
    />
    <Container fluid style={{ marginTop: '1.25vh' }}>
      <Row>
        <h3>404 Page</h3>
      </Row>
    </Container>
  </div>);

export default NotFoundPage;
