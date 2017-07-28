// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';
import styled from 'styled-components';
import ORMCard from '../components/ORMCard';
import getDeadliftStandards from '../strength-standards-generator/deadliftStandards';
import type { ExerciseType } from '../types';

const CardWrapper = styled.div`margin-bottom: 2vh;`;

type Props = {
  bodyweight: ?number,
  ormFormula: (reps: ?number, exerciseWeight: ?number) => ?number,
  setExerciseData: (
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  ) => void,
  benchPressData: {
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  },
  deadliftData: {
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  },
  overheadPressData: {
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  },
  squatData: {
    exerciseName: ExerciseType,
    reps: ?number,
    exerciseWeight: ?number
  }
};

const ORMWrapper = (props: Props) =>
  (<div>
    <CardWrapper>
      <ORMCard
        exerciseName={props.deadliftData.exerciseName}
        title="Deadlift"
        reps={props.deadliftData.reps}
        exerciseWeight={props.deadliftData.exerciseWeight}
        ormFormula={props.ormFormula}
        setExerciseData={props.setExerciseData}
        strengthStandards={getDeadliftStandards(props.bodyweight)}
      />
    </CardWrapper>
  </div>);

export default ORMWrapper;
