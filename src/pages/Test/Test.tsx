import React from 'react';
import cn from 'classnames';

import { BurgerIngredients } from 'features/BurgerIngredients';

import { Main } from 'layouts/Main';

import type { Props } from './types';

export const Test = ({}: Props) => {
  return <BurgerIngredients />;
};

export const PageTest = () => {
  return (
    <Main>
      <Test />
    </Main>
  );
};
