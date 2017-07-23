// @flow
import React from 'react';
import {
  Button as UnstyledButton,
  Form as UnstyledForm,
  FormGroup as UnstlyedFormGroup,
  Label,
  Input,
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
	padding: 0.85em;
	border: 1px solid rgba(0, 0, 0, .125);
	border-radius: .25rem;
`;

type Props = {
  bodyweight: ?number,
  modification: string,
  view: 'data' | 'schedule',
  changeBodyweight: (bodyweight: number) => void,
  handleModificationChange: (modifcation: string) => void,
  handleViewChange: () => void
};

const FormWrapper = (props: Props) => {
  const buttonText = props.view === 'data' ? 'Show schedule' : 'Show 1RM';
  const modifications = ['The Triumvirate', 'Boring but Big'].map(e =>
    (<FormGroup key={e} check>
      <Label check>
        <Input
          type="radio"
          name={'radio1'}
          checked={e === props.modification}
          onChange={() => props.handleModificationChange(e)}
        />{' '}
        {e}
      </Label>
    </FormGroup>)
  );

  return (
    <div>
      <Form>
        <FormGroup row>
          <Col xs="12">
            <Label for="genderInput">Gender</Label>
            <Input type="select" name="Gender" id="genderInput">
              <option>Male</option>
              <option>Female</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col xs="6">
            <Label for="BodyweightInput">Bodyweight</Label>
            <Input
              type="number"
              name="Bodyweight"
              id="bodyweightInput"
              value={props.bodyweight || ''}
              onChange={e =>
                props.changeBodyweight(parseInt(e.target.value, 10))}
            />
          </Col>
          <Col xs="6">
            <Label for="unitInput">Units</Label>
            <Input type="select" name="Units" id="unitInput">
              <option>lbs</option>
              <option>kg</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col xs="12">
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
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col xs="12">
            <Label for="programTemplateInput">Programs</Label>
            <Input
              type="select"
              name="Program Template"
              id="programTemplateInput"
            >
              <option>5/3/1</option>
              <option>Starting Strength</option>
            </Input>
          </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <Col xs="6">
            <Label for="programTemplateInput">Reps</Label>
            <Input
              type="number"
              name="Bench Press Reps"
              id="benchPressReps"
              value={0 || ''}
              onChange={() => console.log('bench reps changed')}
            />
          </Col>
          <Col xs="6">
            <Label for="programTemplateInput">Weight</Label>
            <Input
              type="number"
              name="Bench Press Weight"
              id="benchPressWeight"
              value={0 || ''}
              onChange={() => console.log('bench weight changed')}
            />
          </Col>
        </FormGroup>
        <hr />
        <FormGroup tag="fieldset">
          <Label>Modifications</Label>
          {modifications}
        </FormGroup>
        <Button block onClick={props.handleViewChange}>
          {buttonText}
        </Button>
      </Form>
    </div>
  );
};

export default FormWrapper;
