import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientImageList } from './ingredient-image-list';

export default {
  title: 'Components/IngredientImageList',
  component: IngredientImageList,
} as ComponentMeta<typeof IngredientImageList>;

const Template: ComponentStory<typeof IngredientImageList> = (args) => (
  <IngredientImageList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  images: [
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
  ],
};

export const More = Template.bind({});
More.args = {
  extraClass: 'class',
  images: [
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
    'https://code.s3.yandex.net/react/code/sauce-04.png',
    'https://code.s3.yandex.net/react/code/sauce-04.png',
  ],
};

export const Empty = Template.bind({});
Empty.args = {};
