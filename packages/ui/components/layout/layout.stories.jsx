/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import { DashboardIcon } from '@atoms';
import { Layout } from './index';

export default {
  title: 'components/Layout',
  component: Layout,
};

function LayoutTemplate(args) {
  return React.createElement(Layout, { ...args });
}

export const Default = LayoutTemplate.bind({});
Default.argTypes = {
  children: {
    description: 'Layout inner contents',
  },
  childrenStyle: {
    description: 'To change the children&apos;s style',
  },
  bodyStyle: {
    description: 'To change the bodystyle',
  },
  rootStyle: {
    description: 'To change the root style',
  },
  appBarStyle: {
    description: 'To change the appbar style',
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
