import React, { useEffect } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { useDispatch } from 'shared/hooks/use-redux';
import { wsSlice } from 'entities/ws/model';

import { ProfileFeed } from 'features/profile-feed';
import { ProfileMenu } from 'features/profile-menu';

import { Main as MainLayout } from 'widgets/layout-main';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import styles from './styles.module.css';

import type { Props } from './types';

export const ProfileOrders = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const { isError } = useGetIngredientQuery();

  useEffect(() => {
    const { actions } = wsSlice;
    dispatch(actions.connectionOrderList());

    return () => {
      dispatch(actions.wsClose());
    };
  }, [dispatch]);

  return (
    <div className={cn(styles.page, extraClass)}>
      <ProfileMenu />
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
