/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { Drawer } from './index';

export default {
  title: 'atoms/Drawer',
  component: Drawer,
  argTypes: {
    onCloseDrawer: {
      description: 'To clolse the drawer',
    },
    height: {
      description: 'Height of the drawer',
    },
    anchor: {
      description: 'The place of showing drawer',
    },
    header: {
      description: 'The header part of the drawer',
    },
    footer: {
      description: 'The footer part of the drawer',
    },
    show: {
      description: 'To show and hide the drawer',
    },
    hideBackdrop: {
      description: 'To hide the background',
    },
    isCloseIconRequired: {
      description: 'To show the close Icon for drawer',
    },
  },
};

function Template(args) {
  return React.createElement(Drawer, { ...args });
}

export const Default = Template.bind({});
Default.args = {};
