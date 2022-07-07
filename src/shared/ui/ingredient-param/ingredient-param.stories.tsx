import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientParam } from './ingredient-param';

export default {
  title: 'Components/IngredientParam',
  component: IngredientParam,
} as ComponentMeta<typeof IngredientParam>;

const Template: ComponentStory<typeof IngredientParam> = (args) => (
  <IngredientParam {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'title',
  value: 'value',
  extraClass: 'class',
};
