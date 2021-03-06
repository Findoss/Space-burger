import React, { useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { WsSlice } from 'entities/ws/model';

import { ProfileFeed } from 'features/profile-feed';
import { ProfileMenu } from 'features/profile-menu';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';
import { WS_URL } from 'shared/api/constants';
import { getEntityUser } from 'entities/user/model/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const ProfileOrders = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const rawToken = useSelector(getEntityUser).accessToken;
  const token = rawToken.replace('Bearer ', '');

  const { isError } = useGetIngredientQuery();

  useEffect(() => {
    const { actions } = WsSlice;
    dispatch(actions.connection(`${WS_URL}/orders?token=${token}`));

    return () => {
      dispatch(actions.close(null));
    };
  }, [dispatch]);

  return (
    <div className={cn(styles.page, extraClass)}>
      <ProfileMenu tooltip={t('profileOrders.tolltipInfo')} />
      <ProfileFeed />
    </div>
  );
};

export const PageProfileOrders = () => {
  return (
    <MainLayout>
      <WrapperCenterForm>
        <ProfileOrders />
      </WrapperCenterForm>
    </MainLayout>
  );
};
