// @flow

import React from 'react';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';
import { APP_NAME } from '../../../shared/config';
import DataWrapper from '../DataWrapper';
import TableWrapper from '../TableWrapper';
import type { ormFormulaType } from '../../types';

export default class HomePage extends React.Component {
  state: {
    gender: 'male' | 'female',
    ormFormula: ormFormulaType,
    units: 'lbs' | 'kg',
    view: 'data' | 'table'
  };

  constructor(props: {}) {
    super(props);
    this.state = {
      gender: 'male',
      // @TODO: Have units be based on user location
      ormFormula: 'Epley',
      units: 'lbs',
      view: 'data'
    };
  }

  render() {
    return (
      <div>
        <Helmet
          meta={[
            {
              name: 'description',
              content: "Calculate 1RM's and Workout Programs"
            },
            { property: 'og:title', content: APP_NAME }
          ]}
        />
        <h1>At Home Page</h1>
        {this.state.view === 'data' ? <DataWrapper /> : <TableWrapper />}
        <Button
          onClick={() =>
            (this.state.view === 'data'
              ? this.setState({ view: 'table' })
              : this.setState({ view: 'data' }))}
        >
          Viewing {this.state.view}
        </Button>
      </div>
    );
  }
}
