import React from 'react';

import { useSelector, useDispatch } from 'hooks/useRedux';

import { Modal } from 'components/Modal';
import { ContainerOrderDetails } from '../ContainerOrderDetails';

import { selectIsModalOpen } from '../service/selectors';
import { toggleModalOrder } from '../service/slice';

export const ModalOrderDetails = () => {
  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsModalOpen);

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      onClose={() => {
        dispatch(toggleModalOrder());
      }}
    >
      <ContainerOrderDetails />
    </Modal>
  );
};
