import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientDetails } from 'components/IngredientDetails';
import { IngredientParam } from 'components/IngredientParam';
import {
  mockIngredientDetails,
  mockIngredientParams,
} from 'components/IngredientDetails/__mocks__/IngredientDetails';

export default {
  title: 'Combo/ContainerIngredientDetails',
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
