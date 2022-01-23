import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ModalOverlay } from './ModalOverlay';

export default {
  title: 'Components/ModalOverlay',
  component: ModalOverlay,
  decorators: [
    (Story: any, context: any) => (
      <div>
        <div id="modals"></div>
        {Story(context)}
      </div>
    ),
  ],
} as ComponentMeta<typeof ModalOverlay>;

const Template: ComponentStory<typeof ModalOverlay> = (args) => (
  <ModalOverlay {...args} />
);

export const Default = Template.bind({});
