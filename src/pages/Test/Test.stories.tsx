import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Test } from './Test';

export default {
  title: 'Components/Test',
  component:Test,
} as ComponentMeta<typeof Test>;

const Template: ComponentStory<typeof Test> = (args) => (
  <Test {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};
