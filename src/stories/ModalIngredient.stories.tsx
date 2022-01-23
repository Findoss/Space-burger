import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../config/storybook/decorator-modals';

import { Modal } from 'components/Modal';
import { IngredientDetails } from 'components/IngredientDetails';

import { mockIngredientDetails } from 'components/IngredientDetails/__mocks__/IngredientDetails';

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
  title: 'Подробности',
  children: <IngredientDetails {...mockIngredientDetails} />,
};
