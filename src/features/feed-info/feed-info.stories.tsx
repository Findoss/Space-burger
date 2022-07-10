import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeedInfo } from './feed-info';

export default {
  title: 'Components/FeedInfo',
  component:FeedInfo,
} as ComponentMeta<typeof FeedInfo>;

const Template: ComponentStory<typeof FeedInfo> = (args) => (
  <FeedInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};
