import React from 'react';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';

import { OrderNumberList } from 'shared/ui/order-number-list';
import { OrderStats } from 'shared/ui/order-stats';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const FeedInfo = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();

  const total = 234234;
  const totalToday = 5675675;

  const arr1 = [
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
    { number: 12839 },
  ];

  return (
    <div className={cn(styles.feed_info, extraClass)}>
      <div className={styles.statusSection}>
        <OrderNumberList title={t('feed.done')} isDone={true} array={arr1} />
        <OrderNumberList title={t('feed.process')} array={arr1} />
      </div>
      <OrderStats title={t('feed.doneAllTime')} stat={total} />
      <OrderStats title={t('feed.doneToday')} stat={totalToday} />
    </div>
  );
};
