import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FullscreenProgress } from './FullscreenProgress';

export default {
  title: 'Components/FullscreenProgress',
  component:FullscreenProgress,
} as ComponentMeta<typeof FullscreenProgress>;

const Template: ComponentStory<typeof FullscreenProgress> = (args) => (
  <FullscreenProgress {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
