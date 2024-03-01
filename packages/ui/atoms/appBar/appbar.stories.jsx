/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { DashboardIcon } from '@atoms';
import { AppBar } from './index';

export default {
  title: 'atoms/AppBar',
  component: AppBar,
};

function Template(args) {
  return React.createElement(AppBar, { ...args });
}

export const Default = Template.bind({});
Default.argTypes = {
  navItems: {
    description: 'Sidebar items',
  },
};

Default.args = {
  navItems: [
    {
      icon: <DashboardIcon />,
      navItem: 'Dashboard',
      path: '/',
    },
  ],
};
