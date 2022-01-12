import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureIngredient } from './Ingredient';

export default {
  title: '  Components/PureIngredient',
  component: PureIngredient,
} as ComponentMeta<typeof PureIngredient>;

const Template: ComponentStory<typeof PureIngredient> = (args) => (
  <PureIngredient {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
  id: 'string',
  price: 123,
  name: 'string',
  image: 'string',
};
