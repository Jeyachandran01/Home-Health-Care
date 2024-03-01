/* eslint-disable import/no-anonymous-default-export */
import * as React from 'react';
import { Button } from './index';

export default {
  title: 'atoms/Button',
  component: Button,
};

function Template(args) {
  return React.createElement(Button, { ...args });
}

export const Default = Template.bind({});
Default.args = {
  children: 'Button',
};
Default.argTypes = {
  children: {
    description: 'name of the button',
  },
  variant: {
    description: 'variant of the button',
  },
  disabled: {
    description: 'if we want to disable a button we can use this props',
  },
  startIcon: {
    description: 'we can use the props for button start with Icon',
  },
  endIcon: {
    description: 'we can use the props for button end with Icon',
  },
  loading: {
    description: 'for loading button',
  },
  size: {
    description: 'for change the size of the button',
  },
  fullWidth: {
    description: 'full width for button',
  },
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  ...Default.args,
  startIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-4 -4)">
        <circle
          id="Ellipse_39211"
          data-name="Ellipse 39211"
          cx="16"
          cy="16"
          r="16"
          transform="translate(4 4)"
          fill="#f0f0f0"
        />
        <path
          id="icons8-expand-arrow"
          d="M9.188,5.337,5,1.15.813,5.337a.476.476,0,1,1-.673-.673L4.664.14a.476.476,0,0,1,.673,0L9.861,4.664a.476.476,0,1,1-.673.673Z"
          transform="translate(16.168 25.028) rotate(-90)"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  ),
  endIcon: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
    >
      <g id="Group_9" data-name="Group 9" transform="translate(-4 -4)">
        <circle
          id="Ellipse_39211"
          data-name="Ellipse 39211"
          cx="16"
          cy="16"
          r="16"
          transform="translate(4 4)"
          fill="#f0f0f0"
        />
        <path
          id="icons8-expand-arrow"
          d="M9.188,5.337,5,1.15.813,5.337a.476.476,0,1,1-.673-.673L4.664.14a.476.476,0,0,1,.673,0L9.861,4.664a.476.476,0,1,1-.673.673Z"
          transform="translate(16.168 25.028) rotate(-90)"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
      </g>
    </svg>
  ),
};
