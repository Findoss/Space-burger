import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'shared/hooks/use-кedux';

import { Tabs } from 'shared/components/tabs';
import { selectActualType, selectTypesIngredient } from '../service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const TabsIngredients = ({
  onClick = () => {},
  extraClass = undefined,
}: Props) => {
  const { t } = useTranslation();
  const actualType = useSelector(selectActualType);
  const typesIngredient = useSelector(selectTypesIngredient).map((v) => ({
    key: v,
    title: t(`constructor.${v}`),
  }));

  return (
    <div className={cn(extraClass)}>
      <div className="mb-5 text text_type_main-large">
        {String(t('constructor.constructor'))}
      </div>
      <div className="mb-10">
        <Tabs
          tabs={typesIngredient}
          currentTab={actualType}
          onClick={onClick}
        />
      </div>
    </div>
  );
};
