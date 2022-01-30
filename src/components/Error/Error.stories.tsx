import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Error } from './Error';

export default {
  title: 'Components/Error',
  component:Error,
} as ComponentMeta<typeof Error>;

const Template: ComponentStory<typeof Error> = (args) => (
  <Error {...args} />
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};
