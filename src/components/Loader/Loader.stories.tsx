import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => (
  <div style={{ width: ' 300px', height: '100px' }}>
    <Loader {...args} />
  </div>
);

const TemplateText: ComponentStory<typeof Loader> = (args) => (
  <div style={{ width: '500px', height: '300px' }}>
    <Loader {...args} />
    <Loader {...args} />
    <Loader {...args} />
    <Loader {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  extraClass: 'class',
};

export const Text = TemplateText.bind({});
Text.args = {
  type: 'text',
  extraClass: 'class',
};
