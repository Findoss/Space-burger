import React from 'react';
import cn from 'classnames';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerConstructorCalc = ({
  sumOrder = 0,
  onClick = () => {},
  textButton = '',
}: Props) => {
  return (
    <div className={cn(styles.constructor_price, 'mt-10')}>
      <div className="text text_type_digits-medium mr-10">
        {sumOrder}
        {'  '}
        <CurrencyIcon type="primary" />
      </div>
      <Button onClick={onClick}>
        <div className={cn(styles.constructor_order_button)}>{textButton}</div>
      </Button>
    </div>
  );
};
