import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerConstructorItem } from './BurgerConstructorItem';
import { mockBurgerConstructorItem } from './__mocks__/BurgerConstructorItem';

export default {
  title: '  Components/BurgerConstructorItem',
  component: BurgerConstructorItem,
  argTypes: {
    type: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof BurgerConstructorItem>;

const Template: ComponentStory<typeof BurgerConstructorItem> = (args) => (
  <BurgerConstructorItem {...args} />
);

export const Default = Template.bind({});
Default.args = mockBurgerConstructorItem![0];

export const Locked = Template.bind({});
Locked.args = mockBurgerConstructorItem[1];

export const Top = Template.bind({});
Top.args = mockBurgerConstructorItem[2];

export const Bottom = Template.bind({});
Bottom.args = mockBurgerConstructorItem[3];
