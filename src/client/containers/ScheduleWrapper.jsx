// @flow

import React from 'react';
import styled from 'styled-components';
import { Alert as UnstyledAlert } from 'reactstrap';
import ScheduleCard from '../components/ScheduleCard';
import TemplateGeneratorApi from '../api/template-generators/TemplateGeneratorApi';
import type { ProgramTemplateType, TemplateModificationType } from '../types';

type Props = {
  ormFormula: (reps: ?number, exerciseWeight: ?number) => ?number,
  templateModification: TemplateModificationType,
  units: 'lbs' | 'kg',
  roundingNumber: number,
  templateName: ProgramTemplateType,
  benchPressData: {
    reps: ?number,
    exerciseWeight: ?number
  },
  deadliftData: { reps: ?number, exerciseWeight: ?number },
  overheadPressData: {
    reps: ?number,
    exerciseWeight: ?number
  },
  squatData: { reps: ?number, exerciseWeight: ?number }
};

const StyledAlert = styled(UnstyledAlert)`
	span {
		font-size: 75%;
	}
	padding: 3px 6px;
	strong {
		text-decoration: underline;
		margin-left: 5px
	}
	display: inline-block;
	margin-right: 10px;
`;

export default class ScheduleWrapper extends React.Component {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {
      ormFormula,
      benchPressData,
      deadliftData,
      overheadPressData,
      squatData,
      roundingNumber,
      templateName
    } = this.props;
    const benchPressOrm =
      ormFormula(benchPressData.reps, benchPressData.exerciseWeight) || null;
    const deadliftOrm = ormFormula(
      deadliftData.reps,
      deadliftData.exerciseWeight || null
    );
    const overheadPressOrm =
      ormFormula(overheadPressData.reps, overheadPressData.exerciseWeight) ||
      null;
    const squatOrm =
      ormFormula(squatData.reps, squatData.exerciseWeight) || null;
    const { data } = TemplateGeneratorApi.getTemplateData(
      templateName,
      benchPressOrm,
      deadliftOrm,
      overheadPressOrm,
      squatOrm,
      roundingNumber,
      this.props.templateModification
    );

    return (
      <div>
        <b>One Rep Maxes: </b>
        <StyledAlert color={benchPressOrm !== null ? 'success' : 'danger'}>
          <span>
            Bench Press Max:<strong>{benchPressOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={deadliftOrm !== null ? 'success' : 'danger'}>
          <span>
            Deadlift Max:<strong>{deadliftOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={overheadPressOrm !== null ? 'success' : 'danger'}>
          <span>
            Overhead Press Max: <strong>{overheadPressOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={squatOrm !== null ? 'success' : 'danger'}>
          <span>
            Squat Max:<strong>{squatOrm || '?'}</strong>
          </span>
        </StyledAlert>
        {data.map(e =>
          (<ScheduleCard
            key={e.cardTitle}
            cardData={e}
            columnHeaders={e.columnHeaders}
            templateName={this.props.templateName}
            templateModification={this.props.templateModification}
            styles={{ marginBottom: '30px' }}
          />)
        )}
      </div>
    );
  }
}
