import React from 'react';
import cn from 'classnames';
import { useSelector } from 'shared/hooks/use-redux';

import { OrderIngredient } from 'shared/ui/order-ingredient/order-ingredient';
import { getOrder } from 'entities/ws/model/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const OrderIngredientList = ({
  extraClass = undefined,
  orderId = '',
}: Props) => {
  const ingredients = useSelector(getOrder(orderId))?.ingredientsDetail;

  return (
    <div className={cn(styles.order_ingredient_list, extraClass)}>
      {ingredients &&
        ingredients.map((ingredient, i) => {
          return <OrderIngredient extraClass="mb-4" {...ingredient} key={i} />;
        })}
    </div>
  );
};
