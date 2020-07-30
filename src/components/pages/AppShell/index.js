import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
// import EmailEditor from '../../../components/modules/EmailEditor';
import CommsManagerPage from '../CommsManager';
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