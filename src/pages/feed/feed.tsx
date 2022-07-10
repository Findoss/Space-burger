import React from 'react';
import cn from 'classnames';

import { Main as MainLayout } from 'widgets/layout-main';

import { FeedList } from 'features/feed-list';
import { FeedInfo } from 'features/feed-info';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import styles from './styles.module.css';

export const Feed = () => {
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
