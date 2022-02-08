import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ModalsWrapper } from '../../../../config/storybook/decoratorModals';

import { Modal } from 'shared/components/modal';
import { OrderDetails } from 'shared/components/order-details';

export default {
  title: 'features/ModalOrderDetails',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [ModalsWrapper],
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <OrderDetails
      id="123456"
      content={{
        id: 'string',
        process: 'string',
        pleaseWait: 'string',
      }}
    />
  ),
};
