import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../config/storybook/decoratorModals';

import { Modal } from 'components/Modal';
import { IngredientDetails } from 'components/IngredientDetails';
import { IngredientParam } from 'components/IngredientParam';

import {
  mockIngredientDetails,
  mockIngredientParams,
} from 'components/IngredientDetails/__mocks__/IngredientDetails';

export default {
  title: 'Combo/ModalIngredientExample',
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
  children: (
    <IngredientDetails {...mockIngredientDetails}>
      {Object.entries(mockIngredientParams).map(([k, v]) => (
        <IngredientParam key={k} title={k} value={v} />
      ))}
    </IngredientDetails>
  ),
};
