import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { AppHeader } from './AppHeader';

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
} as ComponentMeta<typeof AppHeader>;

const Template: ComponentStory<typeof AppHeader> = (args) => (
  <AppHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
