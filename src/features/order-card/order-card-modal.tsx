import React from 'react';

import { Modal } from 'shared/ui/modal';
import { OrderCard } from './order-card';
import { Props } from './types';

export const ModalOrderCard = ({ id = '', handlerClose = () => {} }: Props) => {
  if (id === null) {
    return null;
  }

  return (
    <Modal onClose={handlerClose}>
      <OrderCard id={id} />
    </Modal>
  );
};
