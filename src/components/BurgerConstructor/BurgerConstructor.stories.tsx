import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureBurgerConstructor } from './BurgerConstructor';

export default {
  title: 'Components/PureBurgerConstructor',
  component: PureBurgerConstructor,
} as ComponentMeta<typeof PureBurgerConstructor>;

const Template: ComponentStory<typeof PureBurgerConstructor> = (args) => (
  <PureBurgerConstructor {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ingredientTop: {
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-01-mobile.png',
    price: 20,
    text: 'Краторная булка N-200i',
    isLocked: true,
    type: 'top',
  },
  ingredientBottom: {
    thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
    price: 20,
    text: 'Краторная булка N-200i',
    isLocked: true,
    type: 'bottom',
  },
  ingredients: [
    {
      thumbnail: 'https://code.s3.yandex.net/react/code/sp_1-mobile.png',
      price: 300,
      text: 'Плоды Фалленианского дерева',
    },
    {
      thumbnail:
        'https://code.s3.yandex.net/react/code/mineral_rings-mobile.png',
      price: 800,
      text: 'Хрустящие минеральные кольца',
    },
    {
      thumbnail: 'https://code.s3.yandex.net/react/code/sauce-01-mobile.png',
      price: 88,
      text: 'Соус с шипами Антарианского плоскоходца',
    },
    {
      thumbnail: 'https://code.s3.yandex.net/react/code/core-mobile.png',
      price: 450,
      text: 'Кристаллы марсианских альфа-сахаридов',
    },
  ],
  className: 'class',
};
