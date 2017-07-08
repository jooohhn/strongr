// @flow

import React from 'react';
import {
  Table as UnstyledTable,
  Card,
  CardHeader,
  CardBlock
} from 'reactstrap';

import styled from 'styled-components';
import type { programTemplateType } from '../types';

type Props = {
  programTemplate: programTemplateType,
  benchOrm: number,
  squatOrm: number,
  deadliftOrm: number,
  overheadPressOrm: number
};

// @TODO: Find out why border needs !important
const StyledTable = styled(UnstyledTable)`
	th, td {
  	text-align: center;
		vertical-align: middle !important;
		border: 1px solid black !important; 
		padding: 6px;
		white-space: pre;
	}
	th {
		background-color: white;
	}
	font-size: 85%;
`;

const columnHeaders = [
  'Day 1\nOverhead Press',
  'Day 2\nDeadlift',
  'Day 3\nBench Press',
  'Day 4\nSquat'
];

const ScheduleWrapper = (props: Props) =>
  (<Card>
    <CardHeader tag="h5">
      <b>Week 1</b>
    </CardHeader>
    <CardBlock>
      <StyledTable striped responsive>
        <thead>
          <tr>
            <th style={{ width: '100', borderTop: 'none' }}>Phase</th>
            {columnHeaders.map(e =>
              (<th>
                {e}
              </th>)
            )}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th rowSpan="4">Warm Up</th>
          </tr>
          <tr>
            <td>60 x 5</td>
            <td>160 x 5</td>
            <td>95 x 5</td>
            <td>135 x 5</td>
          </tr>
          <tr>
            <td>75 x 5</td>
            <td>200 x 5</td>
            <td>120 x 5</td>
            <td>170 x 5</td>
          </tr>
          <tr>
            <td>85 x 3</td>
            <td>240 x 3</td>
            <td>140 x 3 </td>
            <td>205 x 3</td>
          </tr>
          <tr>
            <th rowSpan="4">5/3/1</th>
          </tr>
          <tr>
            <td>60 x 5</td>
            <td>160 x 5</td>
            <td>95 x 5</td>
            <td>135 x 5</td>
          </tr>
          <tr>
            <td>75 x 5</td>
            <td>200 x 5</td>
            <td>120 x 5</td>
            <td>170 x 5</td>
          </tr>
          <tr>
            <td>85 x 3</td>
            <td>240 x 3</td>
            <td>140 x 3 </td>
            <td>205 x 3</td>
          </tr>
        </tbody>
      </StyledTable>
    </CardBlock>
  </Card>);

export default ScheduleWrapper;
