import React from 'react';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';
import { FeedCard } from 'shared/ui/feed-card';

import styles from './styles.module.css';

import type { Props } from './types';

export const FeedList = ({ extraClass = undefined }: Props) => {
  const arr = [
    {
      ingredients: [],
      _id: '',
      createdAt: '2022-07-07T20:21:15.442Z',
      status: '',
      isOrderPage: '',
      name: '',
      number: 0,
      sum: 0,
    },
    {
      ingredients: [],
      _id: '',
      createdAt: '2022-07-07T20:21:15.442Z',
      status: '',
      isOrderPage: '',
      name: '',
      number: 0,
      sum: 0,
    },
    {
      ingredients: [],
      _id: '',
      createdAt: '2022-07-07T20:21:15.442Z',
      status: '',
      isOrderPage: '',
      name: '',
      number: 0,
      sum: 0,
    },
    {
      ingredients: [],
      _id: '',
      createdAt: '2022-07-07T20:21:15.442Z',
      status: '',
      isOrderPage: '',
      name: '',
      number: 0,
      sum: 0,
    },
  ];
  return (
    <div className={cn(styles.feed_list, extraClass)}>
      {arr.map((item) => {
        return <FeedCard extraClass="mb-4" {...item} />;
      })}
    </div>
  );
};
