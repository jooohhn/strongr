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
  cardData: any
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

const ScheduleCard = (props: Props) => {
  const { columnHeaders, phases } = props.cardData;
  // @TODO When React 16 comes out, replace the array with just two
  // disjoint JSX elements <tr><th></th></tr> and {body content}
  // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
  const bodyContent = phases.map(({ name, rows, setCount }) => {
    const phaseData = rows.map(row =>
      (<tr>
        {row.map(cellContent =>
          (<td key={cellContent}>
            {cellContent}
          </td>)
        )}
      </tr>)
    );
    return [
      <tr>
        <th rowSpan={setCount + 1}>
          {name}
        </th>
      </tr>,
      phaseData
    ];
  });
  // Maps whole row sections together by phase name
  return (
    <Card>
      <CardHeader tag="h5">
        <b>Week 1</b>
      </CardHeader>
      <CardBlock>
        <StyledTable striped responsive>
          <thead>
            <tr>
              <th style={{ width: '100px', borderTop: 'none' }}>Phase</th>
              {columnHeaders.map(e =>
                (<th key={e}>
                  {e}
                </th>)
              )}
            </tr>
          </thead>
          <tbody>
            {bodyContent}
          </tbody>
        </StyledTable>
      </CardBlock>
    </Card>
  );
};

export default ScheduleCard;
