// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';

import styled from 'styled-components';
import ORMCard from '../components/ORMCard';
import type { ormFormulaType } from '../types';

const CardWrapper = styled.div`margin-bottom: 2vh;`;

const lifts = ['Bench Press', 'Deadlift', 'Squat', 'Overhead Press'];

type Props = {
  ormFormula: ormFormulaType
};

const ORMWrapper = (props: Props) =>
  (<div>
    {lifts.map(lift =>
      (<CardWrapper key={lift}>
        <ORMCard ormFormula={props.ormFormula} lift={lift} />
      </CardWrapper>)
    )}
  </div>);

export default ORMWrapper;
