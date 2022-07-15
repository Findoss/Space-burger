import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { OrderIngredientList } from 'features/order-ingredient-list';
import { getOrder } from 'entities/ws/model/selectors';
import { useSelector } from 'shared/hooks/use-redux';
import { useParams } from 'react-router-dom';
import { timeDistance } from 'shared/libs/date';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderCard = ({ extraClass = undefined }: Props) => {
  const { id } = useParams();
  const data = useSelector(getOrder(id ?? ''));

  console.log(data);

  if (!data) {
    return null;
  }

  const { _id, number, status, createdAt, name, sum } = data;

  return (
    <div className={cn('mt-10', styles.order_card, extraClass)}>
      <div className={cn('text text_type_main-medium mb-10', styles.number)}>
        #{number}
      </div>
      <div className={cn('text text_type_main-medium mb-3', styles.name)}>
        {name}
      </div>
      <div className={cn('text text_type_main-default mb-15', styles.status)}>
        {status === 'done' ? 'Выполнен' : 'В процессе'}
      </div>
      <div className="mb-10">
        <div className="text text_type_main-medium mb-6">Состав:</div>
        <OrderIngredientList orderId={_id} />
      </div>
      <div className={cn('', styles.footer)}>
        <div
          className={cn(
            'text text_type_main-default text_color_inactive',
            styles.time,
          )}
        >
          {timeDistance(createdAt)}
        </div>
        <div className={cn('text text_type_digits-default mr-3', styles.sum)}>
          <span className={cn('mr-4')}>{sum}</span>
          <CurrencyIcon type="primary" />
        </div>
      </div>
    </div>
  );
};
