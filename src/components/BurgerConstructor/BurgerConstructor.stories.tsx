import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerConstructor } from './BurgerConstructor';
import {
  mockIngredientTop,
  mockIngredientBottom,
} from './__mocks__/BurgerConstructor';

export default {
  title: 'Features/BurgerConstructor',
  component: BurgerConstructor,
} as ComponentMeta<typeof BurgerConstructor>;

const Template: ComponentStory<typeof BurgerConstructor> = (args) => (
  <BurgerConstructor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ingredientTop: mockIngredientTop,
  ingredientBottom: mockIngredientTop,

  extraClass: 'class',
  text: {
    bunTop: 'верхняя булка',
    bunBottom: 'нижняя булка',
  },
};

export const Empty = Template.bind({});
Empty.args = {
  extraClass: 'class',
  text: {
    topEmpty: 'пусто',
    bottomEmpty: 'пусто',
    mainEmpty: 'пусто',
  },
};
