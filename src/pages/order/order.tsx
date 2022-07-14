import React, { useEffect } from 'react';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';
import { OrderCard } from 'features/order-card';
import { useDispatch } from 'shared/hooks/use-redux';
import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { WS_URL } from 'shared/api/constants';
import { WsSlice } from 'entities/ws/model';

export const Order = () => {
  const dispatch = useDispatch();
  const { isError } = useGetIngredientQuery();

  useEffect(() => {
    const { actions } = WsSlice;
    dispatch(actions.connection(`${WS_URL}/orders/all`));

    return () => {
      dispatch(actions.close(null));
    };
  }, [dispatch]);

  return <OrderCard />;
};

export const PageOrder = () => {
  return (
    <MainLayout>
      <WrapperCenterForm>
        <Order />
      </WrapperCenterForm>
    </MainLayout>
  );
};
