import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'hooks/redux';

import { TabsIngredients } from './TabsIngredients';
import { ContainerIngredientList } from './ContainerIngredientList';
import { ModalIngredientDetails } from './ModalIngredientDetails';

import { selectTypesIngredient } from './service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerIngredients = ({}: Props) => {
  const { t } = useTranslation();

  const typesIngredient = useSelector(selectTypesIngredient).map((v) => ({
    key: v,
    title: t(`constructor.${v}`),
  }));

  return (
    <>
      <TabsIngredients
        title={t('constructor.constructor')}
        tabs={typesIngredient}
      />
      <div className={cn(styles.wrapper_lists, 'custom-scroll')}>
        {typesIngredient.map((type) => (
          <ContainerIngredientList type={type.key} />
        ))}
      </div>
      <ModalIngredientDetails />
    </>
  );
};
