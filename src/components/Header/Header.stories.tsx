import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureHeader } from './Header';

export default {
  title: '  Components/PureHeader',
  component: PureHeader,
} as ComponentMeta<typeof PureHeader>;

const Template: ComponentStory<typeof PureHeader> = (args) => (
  <PureHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
