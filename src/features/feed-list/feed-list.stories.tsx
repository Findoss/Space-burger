import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeedList } from './feed-list';

export default {
  title: 'Features/FeedList',
  component: FeedList,
} as ComponentMeta<typeof FeedList>;

const Template: ComponentStory<typeof FeedList> = (args) => (
  <FeedList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};
