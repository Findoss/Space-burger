import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientDetails } from 'components/ingredient-details';
import { IngredientParam } from 'components/ingredient-param';
import {
  mockIngredientDetails,
  mockIngredientParams,
} from 'components/ingredient-details/__mocks__/ingredient-details';

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
