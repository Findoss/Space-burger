import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { OrderIngredient } from '../order-ingredient/order-ingredient';

export const OrderIngredientList = ({
  extraClass = undefined,
  ingredients = [],
}: Props) => {
  return (
    <div className={cn(styles.order_ingredient_list, extraClass)}>
      {ingredients.map((ingredient) => {
        <OrderIngredient {...ingredient} />;
      })}
    </div>
  );
};
