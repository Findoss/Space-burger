import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Ingredient } from './ingredient';

export default {
  title: 'components/Ingredient',
  component: Ingredient,
} as ComponentMeta<typeof Ingredient>;

const Template: ComponentStory<typeof Ingredient> = (args) => (
  <Ingredient {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  id: 'string',
  price: 123,
  name: 'Соус фирменный Space Sauce',
  image: 'https://code.s3.yandex.net/react/code/sauce-04.png',
};
