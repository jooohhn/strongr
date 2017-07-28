// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../../containers/ScheduleWrapper';
import ORMWrapper from '../ORMWrapper';
import FormWrapper from '../FormWrapper';
import ormFormulas from '../../ORMFormulas';

import type {
  OrmFormulaType,
  ProgramTemplateType,
  ExerciseType
} from '../../types';

export default class HomePage extends React.Component {
  state: {
    bodyweight: ?number,
    sex: 'male' | 'female',
    ormFormulaName: OrmFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: ProgramTemplateType,
    modification: string,
    view: 'data' | 'schedule',
    benchPressData: {
      exerciseName: ExerciseType,
      reps: ?number,
      exerciseWeight: ?number
    },
    deadliftData: {
      exerciseName: ExerciseType,
      reps: ?number,
      exerciseWeight: ?number
    },
    overheadPressData: {
      exerciseName: ExerciseType,
      reps: ?number,
      exerciseWeight: ?number
    },
    squatData: {
      exerciseName: ExerciseType,
      reps: ?number,
      exerciseWeight: ?number
    }
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      bodyweight: null,
      sex: 'male',
      // @TODO: Have units be based on user location
      //        Hardcoded 'epley'
      ormFormulaName: 'epley',
      units: 'lbs',
      programTemplate: '5/3/1',
      modification: 'The Triumvirate',
      view: 'data',
      benchPressData: {
        exerciseName: 'benchPress',
        reps: null,
        exerciseWeight: null
      },
      deadliftData: {
        exerciseName: 'deadlift',
        reps: null,
        exerciseWeight: null
      },
      overheadPressData: {
        exerciseName: 'overheadPress',
        reps: null,
        exerciseWeight: null
      },
      squatData: { exerciseName: 'squat', reps: null, exerciseWeight: null }
    };
  }

  changeBodyweight = (bodyweight: number) => {
    this.setState({ bodyweight });
  };

  handleModificationChange = (modification: string) => {
    this.setState({ modification });
  };

  handleViewChange = () => {
    if (this.state.view === 'data') {
      this.setState({ view: 'schedule' });
    } else if (this.state.view === 'schedule') {
      this.setState({ view: 'data' });
    } else throw new Error('this.state.view is neither schedule nor data');
  };

  setExerciseData = (
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  ) => {
    switch (exerciseName) {
      case 'benchPress':
        this.setState({
          benchPressData: { exerciseName, reps, exerciseWeight }
        });
        break;
      case 'deadlift':
        this.setState({ deadliftData: { exerciseName, reps, exerciseWeight } });
        break;
      case 'overheadPress':
        this.setState({
          overheadPressData: { exerciseName, reps, exerciseWeight }
        });
        break;
      case 'squat':
        this.setState({ squatData: { exerciseName, reps, exerciseWeight } });
        break;
      default:
        throw new Error(
          `setExerciseData given ${exerciseName}" instead of ExerciseType`
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
        <Container style={{ marginTop: '1.25vh' }}>
          <Row>
            <Col xs="12">
              <FormWrapper
                bodyweight={this.state.bodyweight}
                modification={this.state.modification}
                view={view}
                changeBodyweight={this.changeBodyweight}
                handleModificationChange={this.handleModificationChange}
                handleViewChange={this.handleViewChange}
                setExerciseData={this.setExerciseData}
                benchPressData={this.state.benchPressData}
                deadliftData={this.state.deadliftData}
                overheadPressData={this.state.overheadPressData}
                squatData={this.state.squatData}
              />
            </Col>
            <Col xs="12">
              {view === 'data'
                ? <ORMWrapper
                  bodyweight={this.state.bodyweight}
                  ormFormula={ormFormulas[ormFormulaName]}
                  setExerciseData={this.setExerciseData}
                  benchPressData={this.state.benchPressData}
                  deadliftData={this.state.deadliftData}
                  squatData={this.state.squatData}
                  overheadPressData={this.state.overheadPressData}
                />
                : <ScheduleWrapper
                  ormFormula={ormFormulas[ormFormulaName]}
                  modification={this.state.modification}
                  templateName={this.state.programTemplate}
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
