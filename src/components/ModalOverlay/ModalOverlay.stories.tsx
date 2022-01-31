import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../../config/storybook/decoratorModals';

import { ModalOverlay } from './ModalOverlay';

export default {
  title: 'Components/ModalOverlay',
  component: ModalOverlay,
  decorators: [ModalsWrapper],
} as ComponentMeta<typeof ModalOverlay>;

const Template: ComponentStory<typeof ModalOverlay> = (args) => (
  <ModalOverlay {...args} />
);

export const Default = Template.bind({});
