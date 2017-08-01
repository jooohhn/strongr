// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../../containers/ScheduleWrapper';
import GraphsWrapper from '../GraphsWrapper';
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
    sex: 'Male' | 'Female',
    ormFormulaName: OrmFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: ProgramTemplateType,
    modification: string,
    roundingNumber: number,
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
      sex: 'Male',
      // @TODO: Have units be based on user location
      //        Hardcoded 'wathan'
      ormFormulaName: 'wathan',
      units: 'lbs',
      programTemplate: '5/3/1',
      modification: 'The Triumvirate',
      roundingNumber: 5,
      view: 'schedule',
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

  changeModifcation = (modification: string) => {
    this.setState({ modification });
  };

  changeProgramTemplate = (programTemplate: '5/3/1' | 'Starting Strength') => {
    this.setState({ programTemplate });
  };

  changeRoundingNumber = (roundingNumber: number) => {
    this.setState({ roundingNumber });
  };

  changeSex = (sex: 'Male' | 'Female') => {
    this.setState({ sex });
  };

  changeUnits = (units: 'lbs' | 'kg') => {
    this.setState({ units });
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
        <Container fluid style={{ marginTop: '1.25vh' }}>
          <Row>
            <Col xs="12" sm="12" md="5" lg="4" xl="4">
              <FormWrapper
                bodyweight={this.state.bodyweight}
                changeBodyweight={this.changeBodyweight}
                modification={this.state.modification}
                changeModifcation={this.changeModifcation}
                programTemplate={this.state.programTemplate}
                changeProgramTemplate={this.changeProgramTemplate}
                roundingNumber={this.state.roundingNumber}
                changeRoundingNumber={this.changeRoundingNumber}
                sex={this.state.sex}
                changeSex={this.changeSex}
                units={this.state.units}
                changeUnits={this.changeUnits}
                view={view}
                handleViewChange={this.handleViewChange}
                benchPressData={this.state.benchPressData}
                deadliftData={this.state.deadliftData}
                overheadPressData={this.state.overheadPressData}
                squatData={this.state.squatData}
                setExerciseData={this.setExerciseData}
              />
            </Col>
            <Col xs="12" sm="12" md="7" lg="8" xl="8">
              {view === 'data'
                ? <GraphsWrapper
                  bodyweight={this.state.bodyweight}
                  ormFormula={ormFormulas[ormFormulaName]}
                />
                : <ScheduleWrapper
                  ormFormula={ormFormulas[ormFormulaName]}
                  modification={this.state.modification}
                  roundingNumber={this.state.roundingNumber}
                  templateName={this.state.programTemplate}
                  units={this.state.units}
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
