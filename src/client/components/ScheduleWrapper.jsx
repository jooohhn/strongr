// @flow

import React from 'react';
import ScheduleCard from './ScheduleCard';
import { fiveThreeOneGenerator } from '../TemplateFormulas';
import type { programTemplateType } from '../types';

type Props = {
  benchPressOrm: number,
  deadliftOrm: number,
  overheadPressOrm: number,
  programTemplate: programTemplateType,
  squatOrm: number
};

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
    return <ScheduleCard cardData={cardData} />;
  }
}
