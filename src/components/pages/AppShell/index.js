import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import CommsManagerPage from '../CommsManager';
import SavedTemplates from '../SavedTemplates';
import NavigationMenus from '../../modules/NavigationMenus';
import { StyledHeader, StyledContainer } from './styled';

import 'bootstrap/dist/css/bootstrap.min.css';

function AppShell(props) {
  const { match } = props;
  function getRoutes() {
    return (
      <StyledContainer>
        <Switch>
          <Route
            component={CommsManagerPage}
            exact
            path={`${match.url}/`}
          />
          <Route
            component={SavedTemplates}
            exact
            path={`${match.url}templates`}
          />
        </Switch>
      </StyledContainer>
    )
  };

  return (
    <>
      <StyledHeader />
      <NavigationMenus />
      {getRoutes()}
    </>
  )
}

export default withRouter(AppShell);