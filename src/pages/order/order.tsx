import React, { useEffect } from 'react';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';
import { OrderCard } from 'features/order-card';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { WS_URL } from 'shared/api/constants';
import { WsSlice } from 'entities/ws/model';
import { useLocation } from 'react-router-dom';
import { getEntityUser } from 'entities/user/model/selectors';

export const Order = () => {
  const dispatch = useDispatch();
  const { isError } = useGetIngredientQuery();
  const location = useLocation();
  const rawToken = useSelector(getEntityUser).accessToken;
  const token = rawToken.replace('Bearer ', '');

  useEffect(() => {
    const { actions } = WsSlice;

    if (location.pathname.startsWith('/profile')) {
      dispatch(actions.connection(`${WS_URL}/orders?token=${token}`));
    } else {
      dispatch(actions.connection(`${WS_URL}/orders/all`));
    }

    return () => {
      dispatch(actions.close(null));
    };
  }, [dispatch, location]);

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
