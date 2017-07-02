// @flow
import React from 'react';
import {
  Button,
  Form,
  FormGroup as UnstlyedFormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col
} from 'reactstrap';
import styled from 'styled-components';

const FormGroup = styled(UnstlyedFormGroup)`
	margin-bottom: 6px;
`;

const FormWrapper = () =>
  (<Form>
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
            <Input type="text" name="Weight" id="weightInput" />
          </Col>
          <Col xs="5" sm="5" md="5" lg="5" xl="5">
            <Label for="genderInput">Units</Label>
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
        <option>O'Conner et al.</option>
      </Input>
    </FormGroup>
    <FormGroup>
      <Label for="programTemplateInput">Program Template</Label>
      <Input type="select" name="Program Template" id="programTemplateInput">
        <option>5/3/1</option>
        <option>Starting Strength</option>
      </Input>
    </FormGroup>
  </Form>);

export default FormWrapper;
