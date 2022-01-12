import React from 'react';
import cn from 'classnames';

import { CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Counter } from '@ya.praktikum/react-developer-burger-ui-components';
import { PureImage } from 'components/Image';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureIngredient = ({
  price,
  name,
  image,
  count = 0,
  className = undefined,
}: Props) => {
  const ingredientStyle = cn(styles.ingredient, className);

  return (
    <div className={ingredientStyle}>
      {count > 0 ? <Counter count={count} /> : null}
      <div className={cn(styles.ingredient_img, 'ml-4 mr-4 mb-1')}>
        <PureImage src={image} alt="ingredient" />
      </div>
      <div className={cn(styles.ingredient_price, 'mb-1')}>
        <div className={'mr-1'}>{price}</div>
        <CurrencyIcon type="primary" />
      </div>
      <div className={styles.ingredient_title}>{name}</div>
    </div>
  );
};
