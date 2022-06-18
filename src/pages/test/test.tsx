import React from 'react';
import cn from 'classnames';

import { Main } from 'widgets/layout-main';
import { BurgerIngredients } from 'features/burger-ingredients';
import { BurgerConstructor } from 'features/burger-constructor';

import styles from './test.module.css';

import type { Props } from './types';

export const Test = ({}: Props) => {
  return (
    <div className={cn(styles.main, 'pt-10')}>
      <BurgerIngredients extraClass={styles.burger_ingredients} />
      <BurgerConstructor extraClass={styles.burger_constructor} />
    </div>
  );
};

export const PageTest = () => {
  return (
    <Main>
      <Test />
    </Main>
  );
};
