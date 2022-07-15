import React from 'react';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { FeedCard } from 'shared/ui/feed-card';

import styles from './styles.module.css';

import type { Props } from './types';
import { getFeedOrders } from 'entities/ws/model/selectors';
import { t } from 'i18next';
import { useTranslation } from 'react-i18next';

export const FeedList = ({ extraClass = undefined }: Props) => {
  const { t } = useTranslation();
  const orders = useSelector(getFeedOrders);

  return (
    <>
      <div className={cn(extraClass)}>
        <div className="text text_type_main-large mb-8">
          {t('Список заказов')}
        </div>
        <div className={cn(styles.feed_list, 'custom-scroll pr-5')}>
          {orders.map((order) => {
            return (
              <FeedCard
                extraClass="mb-4"
                {...order}
                key={order._id}
                link="/feed"
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
