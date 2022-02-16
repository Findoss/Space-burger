import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'shared/hooks/use-redux';

import { Error } from 'shared/ui/error';
import { Modal } from 'shared/ui/modal';
import { ContainerOrderDetails } from '../container-order-details';

// import { usePostOrderQuery } from 'store/Order/hooks';
import { fetchNewOrder } from 'app/store/order/thunk';
import { selectOrderStatus } from 'app/store/order/selectors';

import { selectIsModalOpen, selectOrder } from '../../model/selectors';
import { toggleModalOrder } from '../../model/slice';
import { Loader } from 'shared/ui/loader';

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
