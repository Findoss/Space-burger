import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContainerIngredientList } from './ContainerIngredientList';

export default {
  title: 'Feature/ContainerIngredientList',
  component: ContainerIngredientList,
} as ComponentMeta<typeof ContainerIngredientList>;

const Template: ComponentStory<typeof ContainerIngredientList> = (args) => (
  <ContainerIngredientList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
