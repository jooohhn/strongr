// @flow
// @TODO: Use cards to represent blocks to input data
import React from 'react';

import styled from 'styled-components';
import ORMCard from '../components/ORMCard';

const CardWrapper = styled.div`margin-bottom: 2vh;`;

const lifts = ['Bench Press', 'Squat', 'Deadlift'];

const ORMWrapper = () =>
  (<div>
    {lifts.map(lift =>
      (<CardWrapper key={lift}>
        <ORMCard lift={lift} />{' '}
      </CardWrapper>)
    )}
  </div>);

export default ORMWrapper;
