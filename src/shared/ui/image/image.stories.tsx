import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from './image';

export default {
  title: 'Components/Image',
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: 'https://code.s3.yandex.net/react/code/bun-02.png',
  alt: 'alt',
};
