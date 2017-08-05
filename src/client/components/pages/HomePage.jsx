// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import DatabaseApi from '../../api/DatabaseApi';
import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../../containers/ScheduleWrapper';
import GraphsWrapper from '../GraphsWrapper';
import FormWrapper from '../FormWrapper';
import TemplateGeneratorApi from '../../template-generators/TemplateGeneratorApi';
import ormFormulas from '../../ORMFormulas';
import type {
  OrmFormulaType,
  ProgramTemplateType,
  ExerciseType,
  TemplateModificationType
} from '../../types';

export default class HomePage extends React.Component {
  state: {
    bodyweight: ?number,
    sex: 'Male' | 'Female',
    ormFormulaName: OrmFormulaType,
    units: 'lbs' | 'kg',
    programTemplate: ProgramTemplateType,
    templateModification: TemplateModificationType,
    roundingNumber: 5 | 2.5,
    view: 'data' | 'schedule',
    benchPressData: {
      exerciseName: 'benchPress',
      reps: ?number,
      exerciseWeight: ?number
    },
    deadliftData: {
      exerciseName: 'deadlift',
      reps: ?number,
      exerciseWeight: ?number
    },
    overheadPressData: {
      exerciseName: 'overheadPress',
      reps: ?number,
      exerciseWeight: ?number
    },
    squatData: {
      exerciseName: 'squat',
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
      templateModification: 'The Triumvirate',
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
    DatabaseApi.saveBodyweight(bodyweight);
    this.setState({ bodyweight });
  };

  changeSex = (sex: 'Male' | 'Female') => {
    DatabaseApi.saveSex(sex);
    this.setState({ sex });
  };

  changeUnits = (units: 'lbs' | 'kg') => {
    DatabaseApi.saveUnits(units);
    this.setState({ units });
  };

  changeProgramTemplate = (programTemplate: '5/3/1' | 'Smolov Jr.') => {
    const templateModification = TemplateGeneratorApi.getTemplateModifications(
      programTemplate
    )[0];
    DatabaseApi.saveProgramTemplate(programTemplate);
    DatabaseApi.saveTemplateModification(templateModification);
    this.setState({ programTemplate, templateModification });
  };

  changeModifcation = (templateModification: TemplateModificationType) => {
    DatabaseApi.saveTemplateModification(templateModification);
    this.setState({ templateModification });
  };

  changeRoundingNumber = (roundingNumber: 5 | 2.5) => {
    DatabaseApi.saveRoundingNumber(roundingNumber);
    this.setState({ roundingNumber });
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
        {
          const benchPressData = { exerciseName, reps, exerciseWeight };
          DatabaseApi.saveBenchPressData(benchPressData);
          this.setState({ benchPressData });
        }
        break;
      case 'deadlift': {
        const deadliftData = { exerciseName, reps, exerciseWeight };
        DatabaseApi.saveDeadliftData(deadliftData);
        this.setState({ deadliftData });
        break;
      }
      case 'overheadPress': {
        const overheadPressData = { exerciseName, reps, exerciseWeight };
        DatabaseApi.saveOverheadPressData(overheadPressData);
        this.setState({ overheadPressData });
        break;
      }
      case 'squat': {
        const squatData = { exerciseName, reps, exerciseWeight };
        DatabaseApi.saveSquatData(squatData);
        this.setState({ squatData });
        break;
      }
      default:
        throw new Error(
          `setExerciseData given ${exerciseName}" instead of ExerciseType`
        );
    }
  };

  /**  Gets data from localforage. If null, keeps defaults from constructor */
  componentDidMount = () => {
    DatabaseApi.getBodyweight().then((bodyweight) => {
      if (bodyweight) {
        this.setState({ bodyweight });
      }
    });
    DatabaseApi.getSex().then((sex) => {
      if (sex) {
        this.setState({ sex });
      }
    });
    DatabaseApi.getUnits().then((units) => {
      if (units) {
        this.setState({ units });
      }
    });
    DatabaseApi.getProgramTemplate().then((programTemplate) => {
      if (programTemplate) {
        this.setState({ programTemplate });
      }
    });
    DatabaseApi.getTemplateModification().then((mod) => {
      if (mod) {
        this.setState({ templateModification: mod });
      }
    });
    DatabaseApi.getRoundingNumber().then((roundingNumber) => {
      if (roundingNumber) {
        this.setState({ roundingNumber });
      }
    });
    DatabaseApi.getBenchPressData().then((benchPressData) => {
      if (benchPressData) {
        this.setState({ benchPressData });
      }
    });
    DatabaseApi.getDeadliftData().then((deadliftData) => {
      if (deadliftData) {
        this.setState({ deadliftData });
      }
    });
    DatabaseApi.getOverheadPressData().then((overheadPressData) => {
      if (overheadPressData) {
        this.setState({ overheadPressData });
      }
    });
    DatabaseApi.getSquatData().then((squatData) => {
      if (squatData) {
        this.setState({ squatData });
      }
    });
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
                templateModification={this.state.templateModification}
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
                  templateModification={this.state.templateModification}
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
