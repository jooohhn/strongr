// @flow

import React from 'react';
import {
  Table as UnstyledTable,
  Card,
  CardHeader,
  CardBlock
} from 'reactstrap';
import styled from 'styled-components';
import type { ScheduleCardDataType } from '../types';

type Props = {
  columnHeaders: Array<string>,
  cardData: ScheduleCardDataType
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
  const { columnHeaders } = props;
  const { phases } = props.cardData;
  // @TODO When React 16 comes out, replace the array with just two
  // disjoint JSX elements <tr><th></th></tr> and {body content}
  // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
  const bodyContent = phases.map(({ name, rowContent, setCount }) => {
    const data = rowContent.map((row, y) =>
      (<tr>
        {row.map((cellContent, x) =>
          (<td key={`Content:${cellContent} [${y}][${x}]`}>
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
      data
    ];
  });
  // Maps whole row sections together by phase name
  return (
    <div>
      <Card>
        <CardHeader tag="h5">
          <b>
            {props.cardData.cardTitle}
          </b>
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
    </div>
  );
};

export default ScheduleCard;
