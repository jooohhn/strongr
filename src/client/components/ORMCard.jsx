// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';
import {
  Card,
  CardBlock,
  CardTitle as UnstyledCardTitle,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../constants/colors';
import type { ExerciseType, StrengthStandardsType } from '../types';

const StyledCardTitle = styled(UnstyledCardTitle)`
	font-size: 1.2rem
`;

const Alert = styled.span`
  float: right;
  font-size: 75%;
  border-style: solid;
  border-width: 1px;
  border-color: ${SECONDARY_COLOR};
  color: ${SECONDARY_COLOR};
  background-color: #d4e9f7;
  border-radius: 5px;
  padding: 0.5em;
`;

type Props = {
  title: 'Bench Press' | 'Deadlift' | 'Overhead Press' | 'Squat',
  exerciseName: ExerciseType,
  reps: ?number,
  exerciseWeight: ?number,
  ormFormula: (reps: ?number, exerciseWeight: ?number) => ?number,
  setExerciseData: (
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  ) => void,
  strengthStandards: StrengthStandardsType
};

export default class ORMCard extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  handleInputChange = (e: SyntheticEvent) => {
    if (!(e.target instanceof window.HTMLInputElement)) {
      return;
    }
    if (e.target.name === 'Repetitions') {
      const { setExerciseData } = this.props;
      const { exerciseName, exerciseWeight } = this.props;
      const newReps = parseInt(e.target.value, 10) || null;
      setExerciseData(exerciseName, newReps, exerciseWeight);
    } else if (e.target.name === 'ExerciseWeight') {
      const { setExerciseData } = this.props;
      const { exerciseName, reps } = this.props;
      const newWeight = parseInt(e.target.value, 10) || null;
      setExerciseData(exerciseName, reps, newWeight);
    } else {
      throw new Error(
        `Input name is ${e.target
          .name} rather than "ExerciseWeight" or "Repetitions"`
      );
    }
  };

  render() {
    const { title, reps, exerciseWeight, ormFormula } = this.props;
    const orm = ormFormula(reps, exerciseWeight) || '?';

    return (
      <div>
        <Card>
          <CardBlock>
            <StyledCardTitle>
              {title}
              <Alert>
                {`1RM: ${orm}`}
              </Alert>
            </StyledCardTitle>
            <FormGroup>
              <Container fluid style={{ padding: '0' }}>
                <Row style={{ padding: '0' }}>
                  <Col xs="7" sm="7" md="7" lg="7" xl="7">
                    <Label for="benchRepsInput">Repetitions</Label>
                    <Input
                      type="number"
                      name="Repetitions"
                      id="benchRepsInput"
                      value={reps || ''}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                  <Col xs="5" sm="5" md="5" lg="5" xl="5">
                    <Label for="weightInput">Weight</Label>
                    <Input
                      type="number"
                      name="ExerciseWeight"
                      id="ExerciseWeightInput"
                      value={exerciseWeight || ''}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
              </Container>
            </FormGroup>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
