import React from 'react';
import cn from 'classnames';



import styles from './styles.module.css';

import type { Props } from './types';

export const OrderCard = ({ extraClass = undefined }: Props) => {
  return <div className={cn(styles.order_card, extraClass)}>order_card</div>;
};

