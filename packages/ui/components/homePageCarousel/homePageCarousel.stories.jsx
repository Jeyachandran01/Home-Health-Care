import * as React from 'react';
import { HomePageCarousel } from './index';

export default {
  title: 'components/HomePageCarousel',
  component: HomePageCarousel,
};

function Template(args) {
  return React.createElement(HomePageCarousel, { ...args });
}

export const Default = Template.bind({});
Default.args = {
  children: 'HomePageCarousel',
};

Default.argTypes = {};
