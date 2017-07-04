// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

import { APP_NAME } from '../../../shared/config';
// import ScheduleWrapper from '../ScheduleWrapper';
import ORMWrapper from '../ORMWrapper';
import FormWrapper from '../FormWrapper';
import type { ormFormulaType, programTemplateType } from '../../types';

export default class HomePage extends React.Component {
  state: {
    gender: 'male' | 'female',
    ormFormula: ormFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: programTemplateType,
    view: 'data' | 'table'
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      gender: 'male',
      // @TODO: Have units be based on user location
      ormFormula: 'Epley',
      units: 'lbs',
      programTemplate: '5/3/1',
      view: 'data'
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
        <Container fluid style={{ marginTop: '1.25vh' }}>
          <Row>
            <Col xs="12" sm="12" md="5" lg="4" xl="3">
              <FormWrapper />
            </Col>
            <Col xs="12" sm="12" md="7" lg="8" xl="9">
              <ORMWrapper />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
