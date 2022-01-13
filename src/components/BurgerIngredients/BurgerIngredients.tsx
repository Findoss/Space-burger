import React from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import { PureTabs } from 'components/Tabs';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureBurgerIngredients = ({ className = undefined }: Props) => {
  const style = cn(styles.burger_ingredients, className);
  const { t } = useTranslation();

  const tabs = [
    { key: '1', title: t('constructor.bells') },
    { key: '2', title: t('constructor.sauces') },
    { key: '3', title: t('constructor.filling') },
  ];

  return (
    <div className={style}>
      <h2>{t('constructor.constructor')}</h2>
      <br />
      <PureTabs tabs={tabs} />
    </div>
  );
};

export const BurgerIngredients = () => {
  return <PureBurgerIngredients></PureBurgerIngredients>;
};
