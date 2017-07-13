// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../ScheduleWrapper';
import ORMWrapper from '../ORMWrapper';
import FormWrapper from '../FormWrapper';
import ormFormulas from '../../ORMFormulas';

import type {
  ormFormulaType,
  programTemplateType,
  exerciseType
} from '../../types';

export default class HomePage extends React.Component {
  state: {
    gender: 'male' | 'female',
    benchPressData: {
      exerciseName: exerciseType,
      reps: ?number,
      weight: ?number
    },
    deadliftData: {
      exerciseName: exerciseType,
      reps: ?number,
      weight: ?number
    },
    overheadPressData: {
      exerciseName: exerciseType,
      reps: ?number,
      weight: ?number
    },
    squatData: { exerciseName: exerciseType, reps: ?number, weight: ?number },
    ormFormulaName: ormFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: programTemplateType,
    view: 'data' | 'schedule'
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      gender: 'male',
      benchPressData: { exerciseName: 'benchPress', reps: null, weight: null },
      deadliftData: { exerciseName: 'deadlift', reps: null, weight: null },
      overheadPressData: {
        exerciseName: 'overheadPress',
        reps: null,
        weight: null
      },
      squatData: { exerciseName: 'squat', reps: null, weight: null },
      // @TODO: Have units be based on user location
      //        Hardcoded 'epley'
      ormFormulaName: 'epley',
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
    } else throw new Error('this.state.view is neither schedule nor data');
  };

  setExerciseData = (
    exerciseName: exerciseType,
    reps: ?number,
    weight: ?number
  ) => {
    switch (exerciseName) {
      case 'benchPress':
        this.setState({ benchPressData: { exerciseName, reps, weight } });
        break;
      case 'deadlift':
        this.setState({ deadliftData: { exerciseName, reps, weight } });
        break;
      case 'overheadPress':
        this.setState({ overheadPressData: { exerciseName, reps, weight } });
        break;
      case 'squat':
        this.setState({ squatData: { exerciseName, reps, weight } });
        break;
      default:
        throw new Error(
          `setExerciseData given ${exerciseName}" instead of exerciseType`
        );
    }
  };

  render() {
    const { view, ormFormulaName } = this.state;
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
                ? <ORMWrapper
                  ormFormula={ormFormulas[ormFormulaName]}
                  setExerciseData={this.setExerciseData}
                  benchPressData={this.state.benchPressData}
                  deadliftData={this.state.deadliftData}
                  squatData={this.state.squatData}
                  overheadPressData={this.state.overheadPressData}
                />
                : <ScheduleWrapper
                  ormFormula={ormFormulas[ormFormulaName]}
                  benchPressData={this.state.benchPressData}
                  deadliftData={this.state.deadliftData}
                  squatData={this.state.squatData}
                  overheadPressData={this.state.overheadPressData}
                />}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
