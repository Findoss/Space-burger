import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  BurgerConstructorMainEmpty,
  BurgerConstructorTopEmpty,
  BurgerConstructorBottomEmpty,
} from './BurgerConstructorEmpty';

export default {
  title: '  Components/BurgerConstructorMainEmpty',
  component: BurgerConstructorMainEmpty,
  argTypes: {
    type: {
      type: 'string',
    },
  },
} as ComponentMeta<typeof BurgerConstructorMainEmpty>;

const Template: ComponentStory<typeof BurgerConstructorMainEmpty> = (args) => (
  <>
    <BurgerConstructorTopEmpty {...args} />
    <BurgerConstructorMainEmpty {...args} />
    <BurgerConstructorBottomEmpty {...args} />
  </>
);

const Template1: ComponentStory<typeof BurgerConstructorTopEmpty> = (args) => (
  <BurgerConstructorTopEmpty {...args} />
);

const Template2: ComponentStory<typeof BurgerConstructorMainEmpty> = (args) => (
  <BurgerConstructorMainEmpty {...args} />
);

const Template3: ComponentStory<typeof BurgerConstructorBottomEmpty> = (
  args,
) => <BurgerConstructorBottomEmpty {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'empty empty empty',
};

export const Top = Template1.bind({});
Top.args = {
  text: 'empty Top empty',
};

export const Main = Template2.bind({});
Main.args = {
  text: 'empty Main empty',
};

export const Bottom = Template3.bind({});
Bottom.args = {
  text: 'empty Bottom empty',
};
