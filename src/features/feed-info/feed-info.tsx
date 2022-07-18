import React from 'react';
import cn from 'classnames';

import { OrderNumberList } from 'shared/ui/order-number-list';
import { OrderStats } from 'shared/ui/order-stats';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'shared/hooks/use-redux';
import {
  getFeedOrderNumbers,
  getFeedTotal,
  getFeedTotalToday,
} from 'entities/ws/model/selectors';

export const FeedInfo = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  const doneNumbers = useSelector(getFeedOrderNumbers('done'));
  const pendingNumbers = useSelector(getFeedOrderNumbers('pending'));
  const feedTotal = useSelector(getFeedTotal);
  const feedTotalToday = useSelector(getFeedTotalToday);

  return (
    <div className={cn(styles.feed_info, extraClass)}>
      <div className={styles.statusSection}>
        <OrderNumberList
          title={t('feed.done')}
          isDone={true}
          array={doneNumbers}
        />
        <OrderNumberList title={t('feed.process')} array={pendingNumbers} />
      </div>
      <OrderStats
        extraClass="mt-8"
        title={t('feed.doneAllTime')}
        stat={feedTotal}
      />
      <OrderStats
        extraClass="mt-8"
        title={t('feed.doneToday')}
        stat={feedTotalToday}
      />
    </div>
  );
};
