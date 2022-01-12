import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureIngredientList } from './IngredientList';
import { mockIngredientList } from './__mocks__/IngredientList';

export default {
  title: '  Components/PureIngredientList',
  component: PureIngredientList,
} as ComponentMeta<typeof PureIngredientList>;

const Template: ComponentStory<typeof PureIngredientList> = (args) => (
  <PureIngredientList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'class',
  ingredients: mockIngredientList,
};
