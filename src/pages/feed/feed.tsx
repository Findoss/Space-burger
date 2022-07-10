import React from 'react';

import { Main as MainLayout } from 'widgets/layout-main';

import { FeedList } from 'features/feed-list';
import { FeedInfo } from 'features/feed-info';
import { WrapperCenterForm } from 'widgets/wrapper-center-form';

import styles from './styles.module.css';

export const Feed = () => {
  return (
    <WrapperCenterForm>
      <div className={styles.feed}>
        <FeedList />
        <FeedInfo />
      </div>
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
