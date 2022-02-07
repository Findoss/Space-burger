import React from 'react';
import cn from 'classnames';

import { ModalOrderDetails } from './modal-order-details';
import { ContainerBurgerConstructor } from './container-burger-constructor';
import { ContainerBurgerConstructorCalc } from './container-burger-constructor-calc';

import styles from './burger-constructor.module.css';

import type { Props } from './types';

export const BurgerConstructor = ({ extraClass }: Props) => {
  return (
    <div className={cn(styles.burger_constructor, extraClass)}>
      <ContainerBurgerConstructor />
      <ModalOrderDetails />
      <ContainerBurgerConstructorCalc
        extraClass={styles.burger_constructor_calc}
      />
    </div>
  );
};
