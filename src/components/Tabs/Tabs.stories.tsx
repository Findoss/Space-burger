import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureTabs } from './Tabs';

export default {
  title: '  Components/PureTabs',
  component: PureTabs,
} as ComponentMeta<typeof PureTabs>;

const Template: ComponentStory<typeof PureTabs> = (args) => (
  <PureTabs {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    { key: 'one', title: 'title 1' },
    { key: 'two', title: 'title 2' },
    { key: 'tree', title: 'title 3' },
  ],
};
