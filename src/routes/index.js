import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppShell from '../components/pages/AppShell';

function Routes() {
  return (
	<BrowserRouter>
		<AppShell />
  </BrowserRouter>
  )
};

export default Routes