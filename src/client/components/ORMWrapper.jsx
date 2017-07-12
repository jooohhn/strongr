// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';

import styled from 'styled-components';
import ORMCard from '../components/ORMCard';
import type { ormFormulaType, exerciseType } from '../types';

const CardWrapper = styled.div`margin-bottom: 2vh;`;

const exercises = ['benchPress', 'deadlift', 'squat', 'overheadPress'];

type Props = {
  ormFormula: ormFormulaType,
  setOrm: (exerciseType, number) => void
};

const ORMWrapper = (props: Props) =>
  (<div>
    {exercises.map((exercise: exerciseType) =>
      (<CardWrapper key={exercise}>
        <ORMCard
          ormFormula={props.ormFormula}
          exercise={exercise}
          setOrm={props.setOrm}
        />
      </CardWrapper>)
    )}
  </div>);

export default ORMWrapper;
