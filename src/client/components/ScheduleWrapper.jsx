// @flow

import React from 'react';
import styled from 'styled-components';
import { Alert as UnstyledAlert } from 'reactstrap';
import ScheduleCard from './ScheduleCard';
import { fiveThreeOneGenerator } from '../TemplateFormulas';
import type { ProgramTemplateType } from '../types';

type Props = {
  ormFormula: (reps: ?number, weight: ?number) => ?number,
  benchPressData: {
    reps: ?number,
    weight: ?number
  },
  deadliftData: { reps: ?number, weight: ?number },
  overheadPressData: {
    reps: ?number,
    weight: ?number
  },
  squatData: { reps: ?number, weight: ?number }
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
      squatData
    } = this.props;
    const benchPressOrm =
      ormFormula(benchPressData.reps, benchPressData.weight) || null;
    const deadliftOrm = ormFormula(
      deadliftData.reps,
      deadliftData.weight || null
    );
    const overheadPressOrm =
      ormFormula(overheadPressData.reps, overheadPressData.weight) || null;
    const squatOrm = ormFormula(squatData.reps, squatData.weight) || null;
    const { columnHeaders, data } = fiveThreeOneGenerator(
      benchPressOrm,
      deadliftOrm,
      overheadPressOrm,
      squatOrm
    );

    return (
      <div>
        <StyledAlert color={overheadPressOrm !== null ? 'success' : 'danger'}>
          <span>
            Overhead Press Max: <strong>{overheadPressOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={deadliftOrm !== null ? 'success' : 'danger'}>
          <span>
            Deadlift Max:<strong>{deadliftOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={benchPressOrm !== null ? 'success' : 'danger'}>
          <span>
            Bench Press Max:<strong>{benchPressOrm || '?'}</strong>
          </span>
        </StyledAlert>
        <StyledAlert color={squatOrm !== null ? 'success' : 'danger'}>
          <span>
            Squat Max:<strong>{squatOrm || '?'}</strong>
          </span>
        </StyledAlert>
        {data.map(e =>
          <ScheduleCard cardData={e} columnHeaders={columnHeaders} />
        )}
      </div>
    );
  }
}
