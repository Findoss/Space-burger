import React from 'react';
import cn from 'classnames';

import { useSelector, useDispatch } from 'react-redux';


import styles from './styles.module.css';

import type { Props } from './types';

export const FeedInfo = ({ extraClass = undefined }: Props) => {
  return <div className={cn(styles.feed_info, extraClass)}>feed_info</div>;
};

