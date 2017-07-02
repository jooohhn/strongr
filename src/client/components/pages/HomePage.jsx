// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Button, Container, Row, Col } from 'reactstrap';

import { APP_NAME } from '../../../shared/config';
import DataWrapper from '../DataWrapper';
import TableWrapper from '../TableWrapper';
import FormWrapper from '../FormWrapper';
import type { ormFormulaType, programTemplateType } from '../../types';

export default class HomePage extends React.Component {
  state: {
    gender: 'male' | 'female',
    ormFormula: ormFormulaType,
    units: 'lbs' | 'kg',
    view: 'data' | 'table',
    programTemplate: programTemplateType
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      gender: 'male',
      // @TODO: Have units be based on user location
      ormFormula: 'Epley',
      units: 'lbs',
      view: 'data',
      programTemplate: '5/3/1'
    };
  }

  render() {
    return (
      <div>
        <Helmet
          meta={[
            {
              name: 'description',
              content: "Calculate 1RM's and Workout Programs"
            },
            { property: 'og:title', content: APP_NAME }
          ]}
        />
        <Container fluid style={{ marginTop: '2vh' }}>
          <Row>
            <Col xs="12" sm="12" md="3" lg="3" xl="3">
              <FormWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
