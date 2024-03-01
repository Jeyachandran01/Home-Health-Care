import * as React from 'react';
import { Login } from './index';

export default {
  title: 'components/Login',
  component: Login,
};

function Template(args) {
  return React.createElement(Login, { ...args });
}

export const Default = Template.bind({});
Default.args = {
  children: 'Login',
};

Default.argTypes = {};
