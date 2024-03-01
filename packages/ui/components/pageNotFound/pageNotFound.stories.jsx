/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { PageNotFound } from './index';

export default {
  title: 'components/PageNotFound',
  component: PageNotFound,
};

function PageNotFoundTemplate(args) {
  return React.createElement(PageNotFound, { ...args });
}

export const Default = PageNotFoundTemplate.bind({});
Default.args = {};
