import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderCard } from './order-card';

export default {
  title: 'Components/OrderCard',
  component:OrderCard,
} as ComponentMeta<typeof OrderCard>;

const Template: ComponentStory<typeof OrderCard> = (args) => (
  <OrderCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};
