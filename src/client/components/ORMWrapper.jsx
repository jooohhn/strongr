// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';

import styled from 'styled-components';
import ORMCard from '../components/ORMCard';
import type { ExerciseType } from '../types';

const CardWrapper = styled.div`margin-bottom: 2vh;`;

type Props = {
  ormFormula: (reps: ?number, weight: ?number) => ?number,
  setExerciseData: (
    exerciseName: ExerciseType,
    reps: ?number,
    weight: ?number
  ) => void,
  benchPressData: {
    exerciseName: ExerciseType,
    reps: ?number,
    weight: ?number
  },
  deadliftData: { exerciseName: ExerciseType, reps: ?number, weight: ?number },
  overheadPressData: {
    exerciseName: ExerciseType,
    reps: ?number,
    weight: ?number
  },
  squatData: { exerciseName: ExerciseType, reps: ?number, weight: ?number }
};

const ORMWrapper = (props: Props) =>
  (<div>
    <CardWrapper>
      <ORMCard
        exerciseName={props.benchPressData.exerciseName}
        title="Bench Press"
        reps={props.benchPressData.reps}
        weight={props.benchPressData.weight}
        ormFormula={props.ormFormula}
        setExerciseData={props.setExerciseData}
      />
    </CardWrapper>
    <CardWrapper>
      <ORMCard
        exerciseName={props.deadliftData.exerciseName}
        title="Deadlift"
        reps={props.deadliftData.reps}
        weight={props.deadliftData.weight}
        ormFormula={props.ormFormula}
        setExerciseData={props.setExerciseData}
      />
    </CardWrapper>
    <CardWrapper>
      <ORMCard
        exerciseName={props.overheadPressData.exerciseName}
        title="Overhead Press"
        reps={props.overheadPressData.reps}
        weight={props.overheadPressData.weight}
        ormFormula={props.ormFormula}
        setExerciseData={props.setExerciseData}
      />
    </CardWrapper>
    <CardWrapper>
      <ORMCard
        exerciseName={props.squatData.exerciseName}
        title="Squat"
        reps={props.squatData.reps}
        weight={props.squatData.weight}
        ormFormula={props.ormFormula}
        setExerciseData={props.setExerciseData}
      />
    </CardWrapper>
  </div>);

export default ORMWrapper;
