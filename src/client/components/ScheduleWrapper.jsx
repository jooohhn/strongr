// @flow

import React from 'react';
import styled from 'styled-components';
import { Alert as UnstyledAlert } from 'reactstrap';
import ScheduleCard from './ScheduleCard';
import { fiveThreeOneGenerator } from '../TemplateFormulas';
import type { programTemplateType } from '../types';

type Props = {
  benchPressOrm: ?number,
  deadliftOrm: ?number,
  overheadPressOrm: ?number,
  squatOrm: ?number,
  programTemplate: programTemplateType
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
      benchPressOrm,
      deadliftOrm,
      overheadPressOrm,
      squatOrm
    } = this.props;
    const cardData = fiveThreeOneGenerator(
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
        <ScheduleCard cardData={cardData} />
      </div>
    );
  }
}
