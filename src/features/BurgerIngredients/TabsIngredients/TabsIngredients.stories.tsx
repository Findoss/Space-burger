import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TabsIngredients } from './TabsIngredients';

export default {
  title: 'Components/TabsIngredients',
  component: TabsIngredients,
} as ComponentMeta<typeof TabsIngredients>;

const Template: ComponentStory<typeof TabsIngredients> = (args) => (
  <TabsIngredients {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  title: 'title',
  tabs: [
    { key: '1', title: 'bells' },
    { key: '2', title: 'sauces' },
    { key: '3', title: 'filling' },
  ],
};
