import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderIngredientList } from './order-ingredient-list';

export default {
  title: 'Components/OrderIngredientList',
  component: OrderIngredientList,
} as ComponentMeta<typeof OrderIngredientList>;

const Template: ComponentStory<typeof OrderIngredientList> = (args) => (
  <OrderIngredientList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  // ingredients: [
  //   {
  //     name: 'name sdfkj so jfsijd ',
  //     price: 9123,
  //     count: 12,
  //     image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  //   },
  //   {
  //     name: 'name sdfkj so jfsijd ',
  //     price: 9123,
  //     count: 12,
  //     image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  //   },
  //   {
  //     name: 'name sdfkj so jfsijd ',
  //     price: 9123,
  //     count: 12,
  //     image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
  //   },
  // ],
};
