/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import * as AllIcons from './index';

export default {
  title: 'atoms/Icons',
  component: AllIcons,
  argTypes: {},
};

function Icons(args) {
  const allInternalIcons = Object.keys(AllIcons);
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 44 }}>
      {allInternalIcons.map((icon) => {
        const CurrentIcon = AllIcons[icon];
        return (
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              backgroundColor: '#f8fafc',
              padding: '10px 12px 4px 12px',
              borderRadius: '16px',
            }}
            title={icon}
            key={icon}
          >
            <CurrentIcon {...args} />
            <p
              style={{
                fontFamily: 'poppins',
                fontSize: '14px',
              }}
            >
              {icon}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export const Default = Icons.bind({});
Default.args = {
  rootStyle: {
    color: 'primary.main',
    width: 32,
    height: 32,
  },
};

function Icon(args) {
  const { selectIcon } = args;
  const SelectedIcon = AllIcons[selectIcon ?? 'BmiIcon'];
  return <SelectedIcon {...args} />;
}

export const EachIcon = Icon.bind({});
EachIcon.argTypes = {
  selectIcon: {
    control: { type: 'select', options: Object.keys(AllIcons) },
    description: 'The selected Icon',
  },
};
EachIcon.args = {
  rootStyle: {
    color: 'primary.main',
    width: 44,
    height: 44,
  },
  selectIcon: 'BmiIcon',
};
