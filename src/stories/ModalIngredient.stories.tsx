import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../config/storybook/decorator-modals';

import { Modal } from 'components/Modal';
import { IngredientInfo } from 'components/IngredientInfo';

export default {
  title: 'Components/ModalIngredientExample',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [ModalsWrapper],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: <IngredientInfo />,
};
