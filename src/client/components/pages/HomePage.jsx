// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';

import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../ScheduleWrapper';
import ORMWrapper from '../ORMWrapper';
import FormWrapper from '../FormWrapper';
import type { ormFormulaType, programTemplateType } from '../../types';

export default class HomePage extends React.Component {
  state: {
    gender: 'male' | 'female',
    benchPressOrm: number,
    deadliftOrm: number,
    overheadPressOrm: number,
    squatOrm: number,
    ormFormula: ormFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: programTemplateType,
    view: 'data' | 'schedule'
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      gender: 'male',
      // @TODO: Have units be based on user location
      ormFormula: 'epley',
      units: 'lbs',
      programTemplate: '5/3/1',
      view: 'data'
    };
  }

  handleViewChange = () => {
    if (this.state.view === 'data') {
      this.setState({ view: 'schedule' });
    } else if (this.state.view === 'schedule') {
      this.setState({ view: 'data' });
    } else throw new Error('this.state.view is neither schedule or data');
  };

  render() {
    const { view, ormFormula } = this.state;
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
              <FormWrapper
                handleViewChange={this.handleViewChange}
                view={view}
              />
            </Col>
            <Col xs="12" sm="12" md="7" lg="8" xl="9">
              {view === 'data'
                ? <ORMWrapper ormFormula={ormFormula} />
                : <ScheduleWrapper
                  benchPressOrm={236}
                  deadliftOrm={396}
                  squatOrm={342}
                  overheadPressOrm={145}
                />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
