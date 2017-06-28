// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route } from 'react-router-dom';
import Helmet from 'react-helmet';
import { APP_NAME } from '../shared/config';
import NavMenu from './containers/NavMenu';
import HomePage from './components/pages/HomePage';
import FaqPage from './components/pages/FaqPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  FAQ_PAGE_ROUTE
} from '../shared/routes';

const App = () =>
  (<div>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <NavMenu />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} component={HomePage} />
      <Route path={FAQ_PAGE_ROUTE} component={FaqPage} />
      <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>);

export default App;
