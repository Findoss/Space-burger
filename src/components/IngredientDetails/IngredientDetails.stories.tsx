import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientDetails } from './IngredientDetails';
import { mockIngredientDetails } from './__mocks__/IngredientDetails';

export default {
  title: 'Components/IngredientDetails',
  component: IngredientDetails,
} as ComponentMeta<typeof IngredientDetails>;

const Template: ComponentStory<typeof IngredientDetails> = (args) => (
  <IngredientDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
  ...mockIngredientDetails,
};
