/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Label } from './index';

export default {
  title: 'atoms/Label',
  component: Label,
  argTypes: {
    isRequired: {
      description: 'For required symbol',
    },
  },
};

function Template(args) {
  return React.createElement(Label, { ...args });
}

export const Default = Template.bind({});
Default.args = {
  children: 'Label',
};
