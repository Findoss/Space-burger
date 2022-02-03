import React from 'react';
import cn from 'classnames';

import { Main as MainLayout } from 'layouts/Main';
import { BurgerIngredients } from 'features/BurgerIngredients';
import { BurgerConstructor } from 'features/BurgerConstructor';

import styles from './styles.module.css';

import type { Props } from './types';

export const Main = ({ extraClass = undefined }: Props) => (
  <div className={cn(styles.main, 'pt-10')}>
    <BurgerIngredients extraClass={styles.burger_ingredients} />
    <BurgerConstructor extraClass={styles.burger_constructor} />
  </div>
);

export const PageMain = () => (
  <MainLayout>
    <Main />
  </MainLayout>
);
