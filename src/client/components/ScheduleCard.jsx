// @flow

import React from 'react';
import {
  Table as UnstyledTable,
  Card,
  CardHeader,
  CardBlock
} from 'reactstrap';
import _ from 'lodash';
import styled from 'styled-components';
import DatabaseApi from '../api/DatabaseApi';
import type {
  ScheduleCardDataType,
  ProgramTemplateType,
  TemplateModificationType
} from '../types';

type Props = {
  cardData: ScheduleCardDataType,
  columnHeaders: Array<string>,
  templateModification: TemplateModificationType,
  templateName: ProgramTemplateType,
  styles: Object
};

// @TODO: Find out why border needs !important
const StyledTable = styled(UnstyledTable)`
	th, td {
  	text-align: center;
		vertical-align: middle !important;
		border: 1px solid #cccccc !important; 
		padding: 6px;
		white-space: pre;
	}
	th {
		background-color: white;
	}
	font-size: .75rem;
`;

export default class ScheduleCard extends React.Component {
  state: {
    savedWeekData: ?Array<Array<boolean>>
  };
  constructor(props: Props) {
    super(props);
    this.state = { savedWeekData: null };
  }

  saveWeekData(y: number, x: number, flag: boolean) {
    if (!this.state.savedWeekData) {
      throw new Error('savedWeekData needs to exist');
    }
    const savedWeekData = _.cloneDeep(this.state.savedWeekData);
    savedWeekData[y][x] = flag;
    this.setState({ savedWeekData });
    DatabaseApi.saveWeekData(
      this.props.templateName,
      this.props.templateModification,
      this.props.cardData.cardTitle,
      savedWeekData
    );
  }

  componentDidMount() {
    const { cardData, templateName, templateModification } = this.props;
    DatabaseApi.getWeekData(
      templateName,
      templateModification,
      cardData.cardTitle
    ).then((savedWeekData) => {
      if (savedWeekData) {
        this.setState({ savedWeekData });
      } else {
        const rowCount = cardData.phases.reduce(
          (count, phase) => count + phase.setCount,
          0
        );
        const columnCount = cardData.columnCount;
        const defaultSavedWeekData = Array(rowCount).fill(
          Array(columnCount).fill(false)
        );
        this.setState({ savedWeekData: defaultSavedWeekData });
        DatabaseApi.saveWeekData(
          templateName,
          templateModification,
          cardData.cardTitle,
          defaultSavedWeekData
        );
      }
    });
  }

  render() {
    if (!this.state.savedWeekData) return <div />;
    const { columnHeaders } = this.props;
    const { savedWeekData } = this.state;
    const { phases } = this.props.cardData;
    // @TODO When React 16 comes out, replace the array with just two
    // disjoint JSX elements <tr><th></th></tr> and {body content}
    // https://stackoverflow.com/questions/33766085/how-to-avoid-extra-wrapping-div-in-react
    const bodyContent = phases.map(({ name, rowContent, setCount }) => {
      const data = rowContent.map((row, y) =>
        (<tr>
          {row.map((cellContent, x) =>
            (<td
              key={`Content:${cellContent} [${y}][${x}]`}
              style={{ backgroundColor: savedWeekData[y][x] ? 'green' : '' }}
              onClick={() => this.saveWeekData(y, x, !savedWeekData[y][x])}
            >
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
      <div style={this.props.styles}>
        <Card>
          <CardHeader tag="h5">
            <b>
              {this.props.cardData.cardTitle}
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
  }
}
