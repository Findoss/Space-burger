import React, { useEffect } from 'react';
import cn from 'classnames';

import { Main as MainLayout } from 'widgets/layout-main';

import { FeedList } from 'features/feed-list';
import { FeedInfo } from 'features/feed-info';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import { WsSlice } from 'entities/ws/model';
import { useGetIngredientQuery } from 'entities/ingredient/model/hooks';
import { useDispatch } from 'shared/hooks/use-redux';
import { WS_URL } from 'shared/api/constants';

import styles from './styles.module.css';

export const Feed = () => {
  const dispatch = useDispatch();
  const { isError } = useGetIngredientQuery();

  useEffect(() => {
    const { actions } = WsSlice;
    dispatch(actions.connection(`${WS_URL}/orders/all`));

    return () => {
      dispatch(actions.close(null));
    };
  }, [dispatch]);

  return (
    <WrapperCenterForm extraClass={cn('mt-4', styles.feed)}>
      <FeedList extraClass={styles.list} />
      <FeedInfo extraClass={styles.info} />
    </WrapperCenterForm>
  );
};

export const PageFeed = () => {
  return (
    <MainLayout>
      <Feed />
    </MainLayout>
  );
};
