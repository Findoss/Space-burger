import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureMain } from './Main';

export default {
  title: '  Pages/PureMain',
  component: PureMain,
} as ComponentMeta<typeof PureMain>;

const Template: ComponentStory<typeof PureMain> = (args) => (
  <PureMain {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: 'class',
};
