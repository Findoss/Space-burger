import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientImage } from './ingredient-image';

export default {
  title: 'Components/IngredientImage',
  component: IngredientImage,
} as ComponentMeta<typeof IngredientImage>;

const Template: ComponentStory<typeof IngredientImage> = (args) => (
  <IngredientImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
  image: '"https://code.s3.yandex.net/react/code/sauce-04.png"',
};
