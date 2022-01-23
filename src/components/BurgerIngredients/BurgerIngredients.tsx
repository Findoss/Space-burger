import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { Tabs } from 'components/Tabs';
import { IngredientList } from 'components/IngredientList';
import { Loader } from 'components/Loader';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerIngredients = ({
  tabs,
  children,
  extraClass = undefined,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.burger_ingredients, extraClass)}>
      <div className="mb-5 text text_type_main-large">
        {t('constructor.constructor')}
      </div>
      <div className="mb-10">
        <Tabs tabs={tabs} />
      </div>
      <div className={cn(styles.burger_lists, 'custom-scroll')}>{children}</div>
    </div>
  );
};

export const ContainerBurgerIngredients = () => {
  const { t } = useTranslation();
  const tabs = [
    { key: '1', title: t('constructor.bells') },
    { key: '2', title: t('constructor.sauces') },
    { key: '3', title: t('constructor.filling') },
  ];

  return (
    <BurgerIngredients tabs={tabs}>
      <div className={cn(styles.loader)}>
        <Loader />
      </div>
    </BurgerIngredients>
  );
};
