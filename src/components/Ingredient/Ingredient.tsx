import React, { forwardRef } from 'react';
import cn from 'classnames';

import {
  CurrencyIcon,
  Counter,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Image } from 'components/Image';

import styles from './styles.module.css';

import type { Props } from './types';

export const Ingredient = forwardRef<HTMLDivElement, Props>(
  (
    {
      price,
      name,
      image,
      count = 0,
      role = undefined,
      extraClass = undefined,
      onClick = () => {},
    },
    ref,
  ) => {
    return (
      <div
        role={role}
        ref={ref}
        className={cn(styles.ingredient, extraClass)}
        onClick={onClick}
      >
        {count > 0 ? <Counter count={count} /> : null}
        <div className={cn(styles.ingredient_img, 'ml-4 mr-4 mb-1')}>
          <Image src={image} alt={name} />
        </div>
        <div
          className={cn(
            styles.ingredient_price,
            'mb-1  text text_type_digits-default',
          )}
        >
          <div className={'mr-1'}>{price}</div>
          <CurrencyIcon type="primary" />
        </div>
        <div
          className={cn(styles.ingredient_title, 'text text_type_main-default')}
        >
          {name}
        </div>
      </div>
    );
  },
);
