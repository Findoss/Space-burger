import React from 'react';
import cn from 'classnames';

import { Main as MainLayout } from 'widgets/layout-main';
import { BurgerIngredients } from 'features/burger-ingredients';
import { BurgerConstructor } from 'features/burger-constructor';

import styles from './main.module.css';

export const Main = () => (
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
