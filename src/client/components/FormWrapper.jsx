// @flow
import React from 'react';
import {
  Button as UnstyledButton,
  Form as UnstyledForm,
  FormGroup as UnstlyedFormGroup,
  Label,
  Input,
  Container,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';
import { PRIMARY_COLOR, SECONDARY_COLOR, BACKGROUND_COLOR } from '../colors';

const FormGroup = styled(UnstlyedFormGroup)`
	margin-bottom: 6px;
`;

const Button = styled(UnstyledButton)`
	margin-top: 2.5vh;
	background-color: ${SECONDARY_COLOR};
	color: ${BACKGROUND_COLOR};
	border-color: ${SECONDARY_COLOR};
	&:hover {
		background-color: ${PRIMARY_COLOR};
		color: ${BACKGROUND_COLOR};
		border-color: ${PRIMARY_COLOR};
  }
`;

const Form = styled(UnstyledForm)`
	margin-bottom: 2.5vh;
	background-color: white;
	color: #292b2c;
	padding: 0.75em;
	border: 1px solid rgba(0, 0, 0, .125);
	border-radius: .25rem;
`;

type Props = {
  handleViewChange: () => void,
  view: 'data' | 'schedule'
};

const FormWrapper = (props: Props) => {
  const buttonText = props.view === 'data' ? 'Show schedule' : 'Show 1RM';
  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="genderInput">Gender</Label>
          <Input type="select" name="Gender" id="genderInput">
            <option>Male</option>
            <option>Female</option>
          </Input>
        </FormGroup>
        <Container fluid style={{ padding: '0' }}>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="weightInput">Weight</Label>
                <Input type="number" name="Weight" id="weightInput" />
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="unitInput">Units</Label>
                <Input type="select" name="Units" id="unitInput">
                  <option>lbs</option>
                  <option>kg</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col xs="6">
              <FormGroup>
                <Label for="ormFormulaInput">1RM Formula</Label>
                <Input
                  type="select"
                  name="One Rep Max Formula"
                  id="ormFormulaInput"
                >
                  <option>Epley</option>
                  <option>Brzycki</option>
                  <option>McGlothin</option>
                  <option>Lombardi</option>
                  <option>Mayhew et al.</option>
                  <option>
                    {"O'Conner et al."}
                  </option>
                </Input>
              </FormGroup>
            </Col>
            <Col xs="6">
              <FormGroup>
                <Label for="programTemplateInput">Programs</Label>
                <Input
                  type="select"
                  name="Program Template"
                  id="programTemplateInput"
                >
                  <option>5/3/1</option>
                  <option>Starting Strength</option>
                </Input>
              </FormGroup>
            </Col>
          </Row>
        </Container>
        <Button block onClick={props.handleViewChange}>
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

export default FormWrapper;
