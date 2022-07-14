import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { OrderIngredientList } from 'features/order-ingredient-list';
import { Link } from 'shared/ui/link';
import { getOrder } from 'entities/ws/model/selectors';
import { useSelector } from 'shared/hooks/use-redux';
import { useLocation, useParams } from 'react-router-dom';

export const OrderCard = ({ extraClass = undefined }: Props) => {
  // const { _id, number, status, createdAt, name } = {
  //   _id: '62cffb2342d34a001c27798b',
  //   // ingredients: [
  //   //   '60d3b41abdacab0026a733c7',
  //   //   '60d3b41abdacab0026a733d4',
  //   //   '60d3b41abdacab0026a733d3',
  //   //   '60d3b41abdacab0026a733c7',
  //   // ],
  //   status: 'done',
  //   name: 'Астероидный экзо-плантаго флюоресцентный бургер',
  //   createdAt: '2022-07-14T11:16:51.612Z',
  //   // updatedAt: '2022-07-14T11:16:51.904Z',
  //   number: 20130,
  // };

  const { id } = useParams();
  const sum = 1231223;
  const data = useSelector(getOrder(id || ''));

  if (!data) {
    return null;
  }

  const { _id, number, status, createdAt, name } = data;

  return (
    <div className={cn(styles.order_card, extraClass)}>
      <div className={cn(styles.number__order)}>
        {number}-{_id}
      </div>
      <div className={cn(styles.name)}>{name}</div>
      <div className={cn(styles.status)}>{status}</div>
      <OrderIngredientList orderId={_id} />
      <div className={styles.footer}>
        <div className={cn(styles.number__time)}>{createdAt}</div>
        <div className={cn(styles.number__sum)}>{sum}</div>
      </div>
    </div>
  );
};
