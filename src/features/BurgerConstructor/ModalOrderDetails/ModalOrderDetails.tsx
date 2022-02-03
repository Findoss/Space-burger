import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'hooks/useRedux';

import { Error } from 'components/Error';
import { Modal } from 'components/Modal';
import { ContainerOrderDetails } from '../ContainerOrderDetails';

// import { usePostOrderQuery } from 'store/Order/hooks';
import { fetchNewOrder } from 'store/Order/thunk';
import { selectOrderStatus } from 'store/Order/selectors';

import { selectIsModalOpen, selectOrder } from '../service/selectors';
import { toggleModalOrder } from '../service/slice';
import { Loader } from 'components/Loader';

export const ModalOrderDetails = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector(selectIsModalOpen);
  const payload = useSelector(selectOrder);
  const status = useSelector(selectOrderStatus);

  const isLoading = status === 'pending';
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  useEffect(() => {
    if (isOpen) {
      dispatch(fetchNewOrder(payload));
    }
  }, [dispatch, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      onClose={() => {
        dispatch(toggleModalOrder());
      }}
    >
      <>
        {isLoading && (
          <div style={{ width: '500px', height: '500px', margin: '0 auto' }}>
            <Loader />
          </div>
        )}
        {isError && <Error />}
        {isSuccess && <ContainerOrderDetails />}
      </>
    </Modal>
  );
};
