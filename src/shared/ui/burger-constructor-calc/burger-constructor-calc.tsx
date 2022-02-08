import React from 'react';
import cn from 'classnames';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor-calc.module.css';

import type { Props } from './types';

export const BurgerConstructorCalc = ({
  sumOrder = 0,
  onClick = () => {},
  textButton = '',
  extraClass = undefined,
  disabled = undefined,
}: Props) => {
  return (
    <div className={cn('pr-10', styles.constructor_price, extraClass)}>
      <div className="text text_type_digits-medium mr-10">
        {sumOrder}
        {'  '}
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={onClick} disabled={disabled}>
        <div className={cn(styles.constructor_order_button)}>{textButton}</div>
      </Button>
    </div>
  );
};
