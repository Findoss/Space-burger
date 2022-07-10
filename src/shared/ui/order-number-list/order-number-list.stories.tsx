import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OrderNumberList } from './order-number-list';

export default {
  title: 'Components/OrderNumberList',
  component: OrderNumberList,
} as ComponentMeta<typeof OrderNumberList>;

const Template: ComponentStory<typeof OrderNumberList> = (args) => (
  <>
    <OrderNumberList {...args} />
    <OrderNumberList {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  array: [
    { number: 11111 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 19611 },
    { number: 99999 },
  ],
};
