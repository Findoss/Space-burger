import React from 'react';
import cn from 'classnames';

import { ModalOrderDetails } from './ModalOrderDetails';
import { ContainerBurgerConstructor } from './ContainerBurgerConstructor';
import { ContainerBurgerConstructorCalc } from './ContainerBurgerConstructorCalc';

import styles from './styles.module.css';

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
