// @flow

import React from 'react';
import ScheduleCard from './ScheduleCard';
import type { programTemplateType } from '../types';

type Props = {
  programTemplate: programTemplateType,
  benchOrm: number,
  squatOrm: number,
  deadliftOrm: number,
  overheadPressOrm: number
};

const ScheduleWrapper = (props: Props) => <ScheduleCard />;

export default ScheduleWrapper;
