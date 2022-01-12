import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureBurgerIngredients } from './BurgerIngredients';

export default {
  title: '  Components/PureBurgerIngredients',
  component: PureBurgerIngredients,
} as ComponentMeta<typeof PureBurgerIngredients>;

const Template: ComponentStory<typeof PureBurgerIngredients> = (args) => (
  <PureBurgerIngredients {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
