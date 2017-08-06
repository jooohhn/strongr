// @flow
import React from 'react';
import styled from 'styled-components';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import getDeadliftStandards from '../api/strength-standards-generator/deadliftStandards';

type Props = {
  bodyweight: ?number,
  ormFormula: (reps: ?number, exerciseWeight: ?number) => ?number
};

const GraphCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function GraphsWrapper(props: Props) {
  // @TODO: If no weight inputted, add disable graphs

  if (!props.bodyweight) {
    return <div>Enter bodyweight to see stats</div>;
  }
  const deadliftStats = getDeadliftStandards(props.bodyweight);
  const data = [
    {
      name: 'Deadlifts',
      untrained: deadliftStats.untrained,
      novice: deadliftStats.novice,
      intermediate: deadliftStats.intermediate,
      advanced: deadliftStats.advanced,
      elite: deadliftStats.elite
    },
    {
      name: 'Squats',
      untrained: deadliftStats.untrained,
      novice: deadliftStats.novice,
      intermediate: deadliftStats.intermediate,
      advanced: deadliftStats.advanced,
      elite: deadliftStats.elite
    }
  ];
  return (
    <div>
      <GraphCard>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data} margin={{ top: 5, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar dataKey="untrained" fill="red" />
            <Bar dataKey="novice" fill="green" />
            <Bar dataKey="intermediate" fill="blue" />
            <Bar dataKey="advanced" fill="violet" />
            <Bar dataKey="elite" fill="orange" />
          </BarChart>
        </ResponsiveContainer>
      </GraphCard>
    </div>
  );
}
