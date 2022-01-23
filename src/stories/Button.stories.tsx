import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

export default {
  title: 'Core/Button',
  component: Button,
  argTypes: {
    type: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: 'primary',
  children: 'Button',
};

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'secondary',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  children: 'Button',
};
