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
  handleViewChange: () => void
};

const FormWrapper = (props: Props) =>
  (<div>
    <Form>
      <FormGroup>
        <Label for="genderInput">Gender</Label>
        <Input type="select" name="Gender" id="genderInput">
          <option>Male</option>
          <option>Female</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Container fluid style={{ padding: '0' }}>
          <Row>
            <Col xs="7" sm="7" md="7" lg="7" xl="7">
              <Label for="weightInput">Weight</Label>
              <Input type="number" name="Weight" id="weightInput" />
            </Col>
            <Col xs="5" sm="5" md="5" lg="5" xl="5">
              <Label for="unitInput">Units</Label>
              <Input type="select" name="Units" id="unitInput">
                <option>lbs</option>
                <option>kg</option>
              </Input>
            </Col>
          </Row>
        </Container>
      </FormGroup>
      <FormGroup>
        <Label for="ormFormulaInput">One Rep Max Formula</Label>
        <Input type="select" name="One Rep Max Formula" id="ormFormulaInput">
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
      <FormGroup>
        <Label for="programTemplateInput">Program Template</Label>
        <Input type="select" name="Program Template" id="programTemplateInput">
          <option>5/3/1</option>
          <option>Starting Strength</option>
        </Input>
      </FormGroup>
      <Button block onClick={props.handleViewChange}>
        Generate Schedule
      </Button>
    </Form>
  </div>);

export default FormWrapper;
