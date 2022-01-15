import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerIngredients } from './BurgerIngredients';
import { Loader } from 'components/Loader';
import { IngredientList } from 'components/IngredientList';

import { mockIngredientList } from 'components/IngredientList/__mocks__/IngredientList';

export default {
  title: 'Components/BurgerIngredients',
  component: BurgerIngredients,
} as ComponentMeta<typeof BurgerIngredients>;

const Template: ComponentStory<typeof BurgerIngredients> = (args) => (
  <BurgerIngredients {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
  tabs: [
    { key: '1', title: 'bells' },
    { key: '2', title: 'sauces' },
    { key: '3', title: 'filling' },
  ],
  children: (
    <div style={{ width: '100%', height: '300px' }}>
      <Loader />
    </div>
  ),
};

export const List = Template.bind({});
List.args = {
  className: 'class',
  tabs: [
    { key: '1', title: 'bells' },
    { key: '2', title: 'sauces' },
    { key: '3', title: 'filling' },
  ],
  children: <IngredientList ingredients={mockIngredientList} />,
};
