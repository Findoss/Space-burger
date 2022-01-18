import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IngredientInfo } from './IngredientInfo';

export default {
  title: 'Components/IngredientInfo',
  component:IngredientInfo,
} as ComponentMeta<typeof IngredientInfo>;

const Template: ComponentStory<typeof IngredientInfo> = (args) => (
  <IngredientInfo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
