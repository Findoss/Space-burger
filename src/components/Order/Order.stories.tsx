import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Order } from './Order';

export default {
  title: 'Components/Order',
  component:Order,
} as ComponentMeta<typeof Order>;

const Template: ComponentStory<typeof Order> = (args) => (
  <Order {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
