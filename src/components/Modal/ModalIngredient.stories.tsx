import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Modal } from './Modal';
import { IngredientInfo } from 'components/IngredientInfo';

export default {
  title: 'Components/ModalIngredientExample',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  open: true,
  children: <IngredientInfo />,
};
