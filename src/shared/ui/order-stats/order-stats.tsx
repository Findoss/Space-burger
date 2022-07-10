import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const OrderStats = ({
  extraClass = undefined,
  title = 'title',
  stat = 'stat',
}: Props) => {
  return (
    <div className={cn(styles.order_stats, extraClass)}>
      <p className="text text_type_main-medium">{title}</p>
      <p className="text text_type_digits-large">{stat}</p>
    </div>
  );
};
