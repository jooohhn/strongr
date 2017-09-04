// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Container, Row, Col } from 'reactstrap';
import DatabaseApi from '../../api/DatabaseApi';
import { APP_NAME } from '../../../shared/config';
import ScheduleWrapper from '../../containers/ScheduleWrapper';
import FormWrapper from '../FormWrapper';
import TemplateGeneratorApi from '../../api/template-generators/TemplateGeneratorApi';
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
    ormFormulaName: OrmFormulaType,
    units?: 'lbs' | 'kg',
    programTemplate?: ProgramTemplateType,
    templateModification?: TemplateModificationType,
    roundingNumber?: 5 | 2.5,
    loading?: boolean,
    benchPressData?: {
      exerciseName: 'benchPress',
      reps: ?number,
      exerciseWeight: ?number
    },
    deadliftData?: {
      exerciseName: 'deadlift',
      reps: ?number,
      exerciseWeight: ?number
    },
    overheadPressData?: {
      exerciseName: 'overheadPress',
      reps: ?number,
      exerciseWeight: ?number
    },
    squatData?: {
      exerciseName: 'squat',
      reps: ?number,
      exerciseWeight: ?number
    }
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      bodyweight: null,
      // @TODO: Have units be based on user location
      //        Hardcoded 'wathan'
      ormFormulaName: 'wathan',
      loading: true
    };
  }

  changeBodyweight = (bodyweight: number) => {
    DatabaseApi.saveBodyweight(bodyweight);
    this.setState({ bodyweight });
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
    Promise.all([
      DatabaseApi.getBodyweight(),
      DatabaseApi.getUnits(),
      DatabaseApi.getProgramTemplate(),
      DatabaseApi.getTemplateModification(),
      DatabaseApi.getRoundingNumber(),
      DatabaseApi.getBenchPressData(),
      DatabaseApi.getDeadliftData(),
      DatabaseApi.getOverheadPressData(),
      DatabaseApi.getSquatData()
    ])
      .then((values) => {
        values.forEach(({ type, contents }) => {
          this.setState({ [type]: contents });
        });
      })
      .then(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    if (this.state.loading) {
      return <div />;
    }
    const { ormFormulaName } = this.state;
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
              {/* All these props be instantiated once loading === false
							$FlowFixMe */}
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
                benchPressData={this.state.benchPressData}
                deadliftData={this.state.deadliftData}
                overheadPressData={this.state.overheadPressData}
                squatData={this.state.squatData}
                setExerciseData={this.setExerciseData}
              />
            </Col>
            <Col xs="12" sm="12" md="7" lg="8" xl="8">
              <ScheduleWrapper
                ormFormula={ormFormulas[ormFormulaName]}
                templateModification={this.state.templateModification}
                roundingNumber={this.state.roundingNumber}
                templateName={this.state.programTemplate}
                units={this.state.units}
                benchPressData={this.state.benchPressData}
                deadliftData={this.state.deadliftData}
                squatData={this.state.squatData}
                overheadPressData={this.state.overheadPressData}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
