import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Error } from 'shared/ui/error';

import { Main as MainLayout } from 'widgets/layout-main';
import { BurgerIngredients } from 'features/burger-ingredients';
import { BurgerConstructor } from 'features/burger-constructor';

import { useGetIngredientQuery } from 'entities/ingredient/hooks';

import styles from './main.module.css';

export const Main = () => {
  const { t } = useTranslation();
  const { isError } = useGetIngredientQuery();

  if (isError) {
    return <Error error={t('global.error')} />;
  }

  return (
    <div className={cn(styles.main, 'pt-10')}>
      <BurgerIngredients extraClass={styles.burger_ingredients} />
      <BurgerConstructor extraClass={styles.burger_constructor} />
    </div>
  );
};

export const PageMain = () => (
  <MainLayout>
    <Main />
  </MainLayout>
);
