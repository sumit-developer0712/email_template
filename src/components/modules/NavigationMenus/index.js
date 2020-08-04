import React from 'react';
import MenusList from './MenusList';
import { StyledContainer } from './styled';

function NavigationMenus(props) {
  const comManagerConfig = {
    name: 'Communication Manager',
    id: 'comm-manager',
    menuIcon: 'fa-plus',
    options: [
      {
        id: '/',
        title: 'Create New Communication'
      },
      {
        id: '/templates',
        title: 'Update Existing Communication'
      },
      {
        id: '/',
        title: 'Send Instant Communication'
      }
    ]
  };
  const dataManagerConfig = {
    name: 'Data Manager',
    id: 'data-manager',
    menuIcon: 'fa-pencil'
  };
  const accManagerConfig = {
    name: 'Account Manager',
    id: 'acc-manager',
    menuIcon: 'fa-user'
  };
  const reportsConfig = {
    name: 'Reports',
    id: 'reports',
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