import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderIngredient } from './order-ingredient';

export default {
  title: 'Components/OrderIngredient',
  component: OrderIngredient,
} as ComponentMeta<typeof OrderIngredient>;

const Template: ComponentStory<typeof OrderIngredient> = (args) => (
  <OrderIngredient {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: 'name sdfkj so jfsijd ',
  price: 9123,
  count: 12,
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
};
