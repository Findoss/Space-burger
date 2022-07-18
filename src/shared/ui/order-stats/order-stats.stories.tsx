import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderStats } from './order-stats';

export default {
  title: 'Components/OrderStats',
  component: OrderStats,
} as ComponentMeta<typeof OrderStats>;

const Template: ComponentStory<typeof OrderStats> = (args) => (
  <OrderStats {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  stat: 12,
};
