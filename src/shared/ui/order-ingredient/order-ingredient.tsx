import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';
import { IngredientImage } from '../ingredient-image';
import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export const OrderIngredient = ({
  extraClass = undefined,
  name = 'name',
  price = 0,
  count = 0,
  image = '',
}: Props) => {
  return (
    <div className={cn(styles.order_ingredient, extraClass)}>
      <IngredientImage image={image} />
      <div
        className={cn(
          'text text_type_main-default mr-4 ml-4',
          styles.order_ingredient__name,
        )}
      >
        {name}
      </div>
      <div
        className={cn(
          'text text_type_digits-default',
          styles.order_ingredient__cost,
        )}
      >
        <span>{count}</span>x<span>{price}</span>
        <CurrencyIcon type="primary" />
      </div>
    </div>
  );
};
