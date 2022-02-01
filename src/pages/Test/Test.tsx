import React from 'react';
import cn from 'classnames';

import { BurgerIngredients } from 'features/BurgerIngredients';
import { BurgerConstructor } from 'features/BurgerConstructor';

import { Main } from 'layouts/Main';

import type { Props } from './types';

export const Test = ({}: Props) => {
  return (
    <>
      <BurgerConstructor />
      <BurgerIngredients />
    </>
  );
};

export const PageTest = () => {
  return (
    <Main>
      <Test />
    </Main>
  );
};
