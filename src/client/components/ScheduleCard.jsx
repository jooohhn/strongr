// @flow

import React from 'react';
import {
  Table as UnstyledTable,
  Button,
  Card,
  CardHeader,
  CardBlock
} from 'reactstrap';
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

const StyledTableCell = styled.td`
  background-color: ${props => (props.isMarked ? 'green' : '')};
  &:hover {
    background-color: ${props => (props.isMarked ? '' : '#b3ffb3')};
  }
`;

// @TODO: Find out why border needs !important
const StyledTable = styled(UnstyledTable)`
	th, td {
  	text-align: center;
		vertical-align: middle !important;
		border: 1px solid #cccccc !important; 
		padding: 6px;
    white-space: pre;
    transition: .4s ease-out, .2s ease-in;
	}
	th {
		background-color: white;
  }
	font-size: .75rem;
`;

export default class ScheduleCard extends React.Component {
  state: {
    savedWeekData: ?Array<Array<boolean>>,
    showResetConfirmation: boolean
  };
  constructor(props: Props) {
    super(props);
    this.state = { savedWeekData: null, showResetConfirmation: false };
  }

  saveWeekData(y: number, x: number, flag: boolean) {
    if (!this.state.savedWeekData) {
      throw new Error('savedWeekData needs to exist');
    }
    const savedWeekData = this.state.savedWeekData.map(row =>
      row.map(cellContent => cellContent)
    );

    savedWeekData[y][x] = flag;
    this.setState({ savedWeekData });
    DatabaseApi.saveWeekData(
      this.props.templateName,
      this.props.templateModification,
      this.props.cardData.cardTitle,
      savedWeekData
    );
  }

  /** Generates a default 2D array representing the grid of the
   * template's data. All content is set to false to represent unfinished
   * exercise sets
   */
  getDefaultWeekData() {
    const rowCount = this.props.cardData.phases.reduce(
      (count, phase) => count + phase.setCount,
      0
    );
    const columnCount = this.props.cardData.columnCount;
    return Array(rowCount).fill(Array(columnCount).fill(false));
  }

  resetSavedWeekData() {
    const defaultSavedWeekData = this.getDefaultWeekData();
    this.setState({
      savedWeekData: defaultSavedWeekData,
      showResetConfirmation: false
    });
    DatabaseApi.saveWeekData(
      this.props.templateName,
      this.props.templateModification,
      this.props.cardData.cardTitle,
      defaultSavedWeekData
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
        const defaultSavedWeekData = this.getDefaultWeekData();
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
    let counter = 0;
    const bodyContent = phases.map(({ name, rowContent, setCount }) => {
      const data = rowContent.map((row) => {
        const rowNumber = counter;
        counter += 1;
        return (
          <tr>
            {row.map((cellContent, x) =>
              (<StyledTableCell
                key={`Content:${cellContent} [${rowNumber}][${x}]`}
                isMarked={savedWeekData[rowNumber][x]}
                onClick={() =>
                  this.saveWeekData(rowNumber, x, !savedWeekData[rowNumber][x])}
              >
                {cellContent}
              </StyledTableCell>)
            )}
          </tr>
        );
      });
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
            <Button
              size="sm"
              onClick={
                this.state.showResetConfirmation
                  ? () => this.resetSavedWeekData()
                  : () => this.setState({ showResetConfirmation: true })
              }
              style={{ float: 'right' }}
              color={this.state.showResetConfirmation ? 'warning' : 'primary'}
            >
              {this.state.showResetConfirmation
                ? 'Are You Sure?'
                : 'Reset Markers'}
            </Button>
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
