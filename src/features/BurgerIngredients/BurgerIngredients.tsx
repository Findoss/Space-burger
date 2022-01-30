import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'hooks/redux';

import { TabsIngredients } from './TabsIngredients';

import { selectTypesIngredient } from './service/selectors';

import type { Props } from './types';

export const BurgerIngredients = ({}: Props) => {
  const { t } = useTranslation();

  const typesIngredient = useSelector(selectTypesIngredient).map((v) => ({
    key: v,
    title: t(`constructor.${v}`),
  }));

  return (
    <TabsIngredients
      title={t('constructor.constructor')}
      tabs={typesIngredient}
    ></TabsIngredients>
  );
};
