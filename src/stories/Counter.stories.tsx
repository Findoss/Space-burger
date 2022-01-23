import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';

export default {
  title: 'Core/Counter',
  component: Counter,
  argTypes: {
    size: {
      options: ['small', 'default'],
      control: { type: 'radio' },
    },
    onClick: { action: 'clicked' },
  },
} as ComponentMeta<typeof Counter>;

const Template: ComponentStory<typeof Counter> = (args) => {
  return <Counter {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  count: 1,
  size: 'default',
};

export const Small = Template.bind({});
Small.args = {
  count: 1,
  size: 'small',
};
