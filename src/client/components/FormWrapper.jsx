// @flow
import React from 'react';
import {
  Form as UnstyledForm,
  FormGroup as UnstlyedFormGroup,
  Input as UntstyledInput,
  Label as UntstyledLabel,
  Col,
  Container,
  Row
} from 'reactstrap';
import styled from 'styled-components';
import TemplateGeneratorApi from '../api/template-generators/TemplateGeneratorApi';
import type { ExerciseType, TemplateModificationType } from '../types';
import { SECONDARY_COLOR } from '../constants/colors';

const Form = styled(UnstyledForm)`
	margin-bottom: 2vh;
	background-color: white;
	color: #292b2c;
	border: 1px solid rgba(0, 0, 0, .125);
	border-radius: .25rem;
`;

const FormGroup = styled(UnstlyedFormGroup)`
	margin-bottom: 6px;
`;

const Input = styled(UntstyledInput)`
	margin-bottom: 5px;
`;

const Label = styled(UntstyledLabel)`
	margin-bottom: 0;
	font-size: 95%;
`;

const Section = styled.div`
  border-top: ${props =>
    props.topBorder ? '0.5px solid rgba(0, 0, 0, .5)' : 'none'};
  border-bottom: ${props =>
    props.bottomBorder ? '0.5px solid rgba(0, 0, 0, .5)' : 'none'};
  padding: 0.85rem;
  padding-top: ${props => (props.topBorder ? '1.2rem' : '0.85rem')};
  padding-bottom: ${props => (props.bottomBorder ? '1.2rem' : '0.85rem')};
`;

const SectionHeading = styled.div`
  font-size: 1.65rem;
  margin-bottom: 0.55rem;
  font-weight: 500;
  color: ${SECONDARY_COLOR};
`;

function camelToRegular(word: string) {
  return (
    word
      .replace(/([A-Z])/g, ' $1')
      // uppercase the first character
      .replace(/^./, str => str.toUpperCase())
  );
}

type Props = {
  bodyweight: ?number,
  changeBodyweight: (bodyweight: number) => void,
  templateModification: string,
  changeModifcation: (modifcation: TemplateModificationType) => void,
  programTemplate: '5/3/1' | 'Smolov Jr.',
  changeProgramTemplate: (template: '5/3/1' | 'Smolov Jr.') => void,
  roundingNumber: number,
  changeRoundingNumber: (roundingNumber: 5 | 2.5) => void,
  units: 'lbs' | 'kg',
  changeUnits: (units: 'lbs' | 'kg') => void,
  setExerciseData: (
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  ) => void,
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

const FormWrapper = (props: Props) => {
  const templateModifications = TemplateGeneratorApi.getTemplateModifications(
    props.programTemplate
  ).map(e =>
    (<FormGroup style={{ fontSize: '80%' }} key={e} check>
      <Label check>
        <Input
          type="radio"
          name={'radio1'}
          checked={e === props.templateModification}
          onChange={() => props.changeModifcation(e)}
        />{' '}
        {e}
      </Label>
    </FormGroup>)
  );

  const exerciseForms = [
    props.benchPressData,
    props.deadliftData,
    props.overheadPressData,
    props.squatData
  ].map(({ exerciseName, reps, exerciseWeight }) =>
    (<FormGroup key={exerciseName}>
      <Container fluid style={{ padding: '0' }}>
        <Row noGutters>
          <Col
            xs="3"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            <div
              style={{
                fontSize: '90%',
                textAlign: 'center',
                overflow: 'visible'
              }}
            >
              {camelToRegular(exerciseName)}
            </div>
          </Col>
          <Col xs="4">
            <Input
              type="number"
              name={`${camelToRegular(exerciseName)} Reps`}
              id={`${exerciseName}Reps`}
              value={reps || ''}
              onChange={e =>
                props.setExerciseData(
                  exerciseName,
                  parseInt(e.target.value, 10),
                  exerciseWeight
                )}
            />
          </Col>
          <Col
            xs="1"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end'
            }}
          >
            x
          </Col>
          <Col xs="4">
            <Input
              type="number"
              name={`${camelToRegular(exerciseName)} Weight`}
              id={`${exerciseName}Weight`}
              value={exerciseWeight || ''}
              onChange={e =>
                props.setExerciseData(
                  exerciseName,
                  reps,
                  parseInt(e.target.value, 10)
                )}
            />
          </Col>
        </Row>
      </Container>
    </FormGroup>)
  );

  return (
    <div>
      <Form>
        <Section bottomBorder>
          <SectionHeading>User Details</SectionHeading>
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
              <Input
                type="select"
                name="Units"
                id="unitInput"
                value={props.units}
                onChange={e => props.changeUnits(e.target.value)}
              >
                <option>lbs</option>
                <option>kg</option>
              </Input>
            </Col>
          </FormGroup>
        </Section>
        <Section bottomBorder>
          <SectionHeading>Lift Data</SectionHeading>
          <FormGroup row>
            <Col xs={{ size: 4, offset: 4 }}>Reps</Col>
            <Col xs="4">Weight</Col>
          </FormGroup>
          {exerciseForms}
        </Section>
        <Section>
          <SectionHeading>Program Generator</SectionHeading>
          <FormGroup row>
            <Col xs="6">
              <Label for="programTemplateInput">Programs</Label>
              <Input
                type="select"
                name="Program Template"
                id="programTemplateInput"
                value={props.programTemplate}
                onChange={e => props.changeProgramTemplate(e.target.value)}
              >
                <option>5/3/1</option>
                <option>Smolov Jr.</option>
              </Input>
            </Col>
            <Col xs="6">
              <Label for="roundingNumberInput">Round Weights To</Label>
              <Input
                type="select"
                name="RoundingNumber"
                id="roundingNumberInput"
                value={props.roundingNumber}
                onChange={e => props.changeRoundingNumber(e.target.value)}
              >
                <option>5</option>
                <option>2.5</option>
              </Input>
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset">
            <Label style={{ marginBottom: '0.5em' }}>
              templateModifications
            </Label>
            {templateModifications}
          </FormGroup>
        </Section>
      </Form>
    </div>
  );
};

export default FormWrapper;
