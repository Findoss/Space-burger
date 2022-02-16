import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientDetails } from 'shared/ui/ingredient-details';
import { IngredientParam } from 'shared/ui/ingredient-param';
import {
  mockIngredientDetails,
  mockIngredientParams,
} from 'shared/ui/ingredient-details/__mocks__/ingredient-details';

export default {
  title: 'features/ContainerIngredientDetails',
  component: IngredientDetails,
} as ComponentMeta<typeof IngredientDetails>;

const Template: ComponentStory<typeof IngredientDetails> = (args) => (
  <IngredientDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  children: Object.entries(mockIngredientParams).map(([k, v]) => (
    <IngredientParam key={k} title={k} value={v} />
  )),
  ...mockIngredientDetails,
};
