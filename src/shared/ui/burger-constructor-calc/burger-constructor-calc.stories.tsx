import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { BurgerConstructorCalc } from './burger-constructor-calc';

export default {
  title: 'Components/BurgerConstructorCalc',
  component: BurgerConstructorCalc,
} as ComponentMeta<typeof BurgerConstructorCalc>;

const Template: ComponentStory<typeof BurgerConstructorCalc> = (args) => (
  <BurgerConstructorCalc {...args} />
);

export const Default = Template.bind({});
Default.args = {
  textButton: 'Buy',
  sumOrder: 100500,
};

export const Empty = Template.bind({});
Empty.args = {};
