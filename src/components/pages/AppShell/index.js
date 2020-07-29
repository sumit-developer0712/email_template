import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { withRouter } from "react-router";
import EmailEditor from '../../../components/modules/EmailEditor';

import 'bootstrap/dist/css/bootstrap.min.css';

function AppShell(props) {
  const { match } = props;
  return (
    <Switch>
      <Route
        component={EmailEditor}
        exact
        path={`${match.url}/`}
      />
    </Switch>
  )
}

export default withRouter(AppShell);