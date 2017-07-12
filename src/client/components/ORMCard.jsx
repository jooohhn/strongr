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
  Progress as UnstyledProgress,
  Container,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../colors';
import ormFormulas from '../ORMFormulas';
import type { exerciseType, ormFormulaType } from '../types';

const StyledProgress = styled(UnstyledProgress)`
	background-color: ${SECONDARY_COLOR}
`;

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
  exercise: exerciseType,
  ormFormula: ormFormulaType,
  setOrm: (exerciseType, number) => void
};

type State = {
  orm: number | '?',
  reps: number | '',
  weight: number | ''
};

export default class ORMCard extends React.Component {
  state: State;

  constructor(props: Props) {
    super(props);
    this.state = {
      orm: '?',
      reps: '',
      weight: ''
    };
  }

  handleInputChange = (e: SyntheticEvent) => {
    if (!(e.target instanceof window.HTMLInputElement)) {
      return;
    }
    if (e.target.name === 'Repetitions') {
      this.setState({ reps: e.target.value }, () => {
        const { reps, weight } = this.state;
        const { ormFormula } = this.props;
        if (reps !== '' && weight !== '') {
          // $FlowFixMe @ TODO: Define the other ormFormulas
          const orm = ormFormulas[ormFormula](reps, weight);
          this.setState({ orm });
          this.props.setOrm(this.props.exercise, orm);
        } else {
          this.setState({ orm: '?' });
        }
      });
    } else if (e.target.name === 'Weight') {
      this.setState({ weight: e.target.value }, () => {
        const { reps, weight } = this.state;
        const { ormFormula } = this.props;
        if (reps !== '' && weight !== '') {
          // $FlowFixMe @ TODO: Define the other ormFormulas
          const orm = ormFormulas[ormFormula](reps, weight);
          this.setState({ orm });
          this.props.setOrm(this.props.exercise, orm);
        } else {
          this.setState({ orm: '?' });
        }
      });
    } else {
      throw new Error(
        `Input name is ${e.target.name} rather than "Weight" or "Repetitions"`
      );
    }
  };

  render() {
    return (
      <div>
        <Card>
          <CardBlock>
            <StyledCardTitle>
              {this.props.exercise}
              <Alert>
                {`1RM: ${this.state.orm}`}
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
                      value={this.state.reps}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                  <Col xs="5" sm="5" md="5" lg="5" xl="5">
                    <Label for="weightInput">Weight</Label>
                    <Input
                      type="number"
                      name="Weight"
                      id="weightInput"
                      value={this.state.weight}
                      onChange={this.handleInputChange}
                    />
                  </Col>
                </Row>
              </Container>
            </FormGroup>
            <StyledProgress multi>
              <StyledProgress bar value="15" />
            </StyledProgress>
          </CardBlock>
        </Card>
      </div>
    );
  }
}
