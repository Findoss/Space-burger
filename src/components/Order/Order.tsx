import React from 'react';
import cn from 'classnames';

import { ReactComponent as DoneIcon } from 'assets/images/icons/done.svg';
import styles from './styles.module.css';

import type { Props } from './types';

export const Order = ({ className = undefined }: Props) => {
  return (
    <div className={cn(styles.order, className)}>
      <div className={cn('text text_type_digits-large mt-20 mb-8', styles.id)}>
        123456
      </div>
      <div className={cn('text text_type_main-medium mb-15')}>
        идентификатор заказа
      </div>
      <div className={cn('mb-15')}>
        <DoneIcon />
      </div>
      <div className={cn('text text_type_main-small mb-2')}>
        Ваш заказ начали готовить
      </div>
      <div
        className={cn('text text_type_main-small text_color_inactive mb-20')}
      >
        Дождитесь готовности на орбитальной станции
      </div>
    </div>
  );
};
