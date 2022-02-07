import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientList } from './ingredient-list';
import { mockIngredientList } from './__mocks__/ingredient-list';

export default {
  title: 'Components/IngredientList',
  component: IngredientList,
} as ComponentMeta<typeof IngredientList>;

const Template: ComponentStory<typeof IngredientList> = (args) => (
  <IngredientList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'title',
};

// TODO Children
