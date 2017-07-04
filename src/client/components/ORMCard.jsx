// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';
import {
  Card,
  CardText,
  CardBlock,
  CardTitle,
  CardSubtitle,
  FormGroup,
  Label,
  Input,
  Progress,
  Container,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';
import { SECONDARY_COLOR } from '../colors';
import type { liftType } from '../types';

const StyledProgress = styled(Progress)`
	background-color: ${SECONDARY_COLOR}
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
  lift: liftType
};

const ORMCard = (props: Props) =>
  (<div>
    <Card>
      <CardBlock>
        <CardTitle>
          {props.lift}
          <Alert> 1RM: ? </Alert>
        </CardTitle>
        <FormGroup>
          <Container fluid style={{ padding: '0' }}>
            <Row style={{ padding: '0' }}>
              <Col xs="7" sm="7" md="7" lg="7" xl="7">
                <Label for="benchRepsInput">Repetitions</Label>
                <Input type="text" name="Repetitions" id="benchRepsInput" />
              </Col>
              <Col xs="5" sm="5" md="5" lg="5" xl="5">
                <Label for="weightInput">Weight</Label>
                <Input type="text" name="Weight" id="weightInput" />
              </Col>
            </Row>
          </Container>
        </FormGroup>
        <Progress multi>
          <StyledProgress bar value="15" />
        </Progress>
      </CardBlock>
    </Card>
  </div>);

export default ORMCard;
