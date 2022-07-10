import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FeedCard } from './feed-card';

export default {
  title: 'Components/FeedCard',
  component: FeedCard,
} as ComponentMeta<typeof FeedCard>;

const Template: ComponentStory<typeof FeedCard> = (args) => (
  <FeedCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  extraClass: 'class',
  ingredients: [
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
  ],
  status: 'done',
  name: 'Астероидный био-марсианский флюоресцентный spicy бургер',
  createdAt: '2022-07-07T20:21:15.442Z',
  number: 19611,
  sum: 12231,
};
