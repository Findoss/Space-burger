import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderDetails } from './order-details';

export default {
  title: 'Components/OrderDetails',
  component: OrderDetails,
} as ComponentMeta<typeof OrderDetails>;

const Template: ComponentStory<typeof OrderDetails> = (args) => (
  <OrderDetails {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: '12345600',
  extraClass: 'class',
};
