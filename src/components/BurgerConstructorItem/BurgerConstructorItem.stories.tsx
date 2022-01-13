import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureBurgerConstructorItem } from './BurgerConstructorItem';

export default {
  title: '  Components/PureBurgerConstructorItem',
  component: PureBurgerConstructorItem,
  argTypes: {
    type: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof PureBurgerConstructorItem>;

const Template: ComponentStory<typeof PureBurgerConstructorItem> = (args) => (
  <PureBurgerConstructorItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  price: 123,
  text: 'Краторная булка N-200i',
  type: undefined,
};

export const Locked = Template.bind({});
Locked.args = {
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  price: 123,
  text: 'Краторная булка N-200i',
  isLocked: true,
};

export const Top = Template.bind({});
Top.args = {
  type: 'top',
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  price: 123,
  text: 'Краторная булка N-200i',
};

export const Bottom = Template.bind({});
Bottom.args = {
  thumbnail: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
  price: 123,
  text: 'Краторная булка N-200i',
  type: 'bottom',
};
