import React from 'react';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { FeedCard } from 'shared/ui/feed-card';

import styles from './styles.module.css';

import type { Props } from './types';
import { getFeedOrders } from 'entities/ws/model/selectors';

export const ProfileFeed = ({ extraClass = undefined }: Props) => {
  const orders = useSelector(getFeedOrders);

  return (
    <div className={cn(styles.feed_list, extraClass)}>
      {orders.map((order) => {
        return <FeedCard extraClass="mb-4" {...order} key={order._id} />;
      })}
    </div>
  );
};
