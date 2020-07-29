import React from 'react';
import MenusList from './MenusList';
import { StyledContainer } from './styled';

function NavigationMenus(props) {
  const comManagerConfig = {
    name: 'Communication Manager',
    menuIcon: 'fa-plus',
    options: [
      {
        path: '/',
        title: 'Create New Communication'
      },
      {
        path: '/update',
        title: 'Update Existing Communication'
      },
      {
        path: '/',
        title: 'Send Instant Communication'
      }
    ]
  };
  const dataManagerConfig = {
    name: 'Data Manager',
    menuIcon: 'fa-pencil'
  };
  const accManagerConfig = {
    name: 'Account Manager',
    menuIcon: 'fa-user'
  };
  const reportsConfig = {
    name: 'Reports',
    menuIcon: 'fa-line-chart'
  };
  return (
    <StyledContainer>
      <MenusList {...comManagerConfig} />
      <MenusList {...dataManagerConfig} />
      <MenusList {...accManagerConfig} />
      <MenusList {...reportsConfig} />
    </StyledContainer>
  )
}

export default NavigationMenus;