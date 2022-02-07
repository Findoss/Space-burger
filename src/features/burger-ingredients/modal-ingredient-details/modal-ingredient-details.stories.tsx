import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../../../config/storybook/decoratorModals';

import { Modal } from 'components/modal';
import { IngredientDetails } from 'components/ingredient-details';
import { IngredientParam } from 'components/ingredient-param';

import {
  mockIngredientDetails,
  mockIngredientParams,
} from 'components/ingredient-details/__mocks__/ingredient-details';

export default {
  title: 'features/ModalIngredientDetails',
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
