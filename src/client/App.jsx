// @flow

import React from 'react';
import { Switch } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { APP_NAME } from '../shared/config';
import NavMenu from './containers/NavMenu';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import FaqPage from './components/pages/FaqPage';
import AboutPage from './components/pages/AboutPage';
import NotFoundPage from './components/pages/NotFoundPage';
import {
  HOME_PAGE_ROUTE,
  ABOUT_PAGE_ROUTE,
  FAQ_PAGE_ROUTE,
  ROOT_ROUTE
} from '../shared/routes';
import { BACKGROUND_COLOR } from './colors';

// See app.globa.css for why flex property is used (so sticky footer)
const ContentWrapper = styled.div`
  min-height: 92vh;
  background-color: ${BACKGROUND_COLOR};
  flex: 1 0 auto; 
}
`;

const App = () =>
  (<div>
    <ContentWrapper>
      <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
      <NavMenu />
      <Switch>
        <Route
          exact
          path={ROOT_ROUTE}
          render={() => <Redirect to={HOME_PAGE_ROUTE} />}
        />
        <Route path={HOME_PAGE_ROUTE} component={HomePage} />
        <Route path={FAQ_PAGE_ROUTE} component={FaqPage} />
        <Route path={ABOUT_PAGE_ROUTE} component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </ContentWrapper>
    <Footer />
  </div>);

export default App;
