import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerConstructor } from './BurgerConstructor';
import {
  mockIngredients,
  mockIngredientTop,
  mockIngredientBottom,
} from './__mocks__/BurgerConstructor';

export default {
  title: 'Components/BurgerConstructor',
  component: BurgerConstructor,
} as ComponentMeta<typeof BurgerConstructor>;

const Template: ComponentStory<typeof BurgerConstructor> = (args) => (
  <BurgerConstructor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ingredientTop: mockIngredientTop,
  ingredientBottom: mockIngredientBottom,
  ingredients: mockIngredients,
  className: 'class',
};
