import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientDetails } from './ingredient-details';
import {
  mockIngredientDetails,
  mockIngredientParams,
} from './__mocks__/ingredient-details';

export default {
  title: 'Components/IngredientDetails',
  component: IngredientDetails,
} as ComponentMeta<typeof IngredientDetails>;

const Template: ComponentStory<typeof IngredientDetails> = (args) => (
  <IngredientDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  children: 'children',
  ...mockIngredientDetails,
};
