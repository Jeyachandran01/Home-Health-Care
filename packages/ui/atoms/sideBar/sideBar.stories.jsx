import React from 'react';

import { SideBar } from '.';
import { DashboardIcon } from '../icons';

export default {
  title: 'atoms/Sidebar',
  component: SideBar,
  argTypes: {
    children: {
      control: { type: 'text' },
    },
  },
};

function Template(args) {
  return React.createElement(SideBar, { ...args });
}

export const Default = Template.bind({});
Default.args = {
  navItems: [
    {
      icon: <DashboardIcon />,
      navItem: 'Home',
      path: '/',
    },
  ],
};
