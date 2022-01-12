import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PureImage } from './Image';

export default {
  title: '  Components/PureImage',
  component: PureImage,
} as ComponentMeta<typeof PureImage>;

const Template: ComponentStory<typeof PureImage> = (args) => (
  <PureImage {...args} />
);

export const Default = Template.bind({});
Default.args = {
  src: 'https://code.s3.yandex.net/react/code/bun-02.png',
  alt: 'alt',
};
