import React from 'react';

import { ModalOrderDetails } from './ModalOrderDetails';
import { ContainerBurgerConstructor } from './ContainerBurgerConstructor';
import { ContainerBurgerConstructorCalc } from './ContainerBurgerConstructorCalc';

import type { Props } from './types';

export const BurgerConstructor = ({ extraClass }: Props) => {
  return (
    <div className={extraClass}>
      <ContainerBurgerConstructor />
      <ModalOrderDetails />
      <ContainerBurgerConstructorCalc />
    </div>
  );
};
