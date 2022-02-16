import React, { forwardRef } from 'react';
import { useSelector } from 'shared/hooks/use-redux';
import { useTranslation } from 'react-i18next';

import { ContainerIngredient } from '../container-ingredient';
import { IngredientList } from 'shared/ui/ingredient-list';
import { Loader } from 'shared/ui/loader';
import { Error } from 'shared/ui/error';

import {
  selectIngredientsByType,
  selectIngredientStatus,
} from 'entities/ingredient/selectors';

import type { Props } from './types';

export const ContainerIngredientList = forwardRef<HTMLDivElement, Props>(
  ({ type }, ref) => {
    const { t } = useTranslation();

    const status = useSelector(selectIngredientStatus);
    const dataIdIngredients = useSelector(selectIngredientsByType(type));

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'fulfilled') {
      return (
        <IngredientList ref={ref} title={t(`constructor.${type}`)}>
          {dataIdIngredients.map((id) => (
            <ContainerIngredient key={id} id={id} />
          ))}
        </IngredientList>
      );
    }

    return <Loader />;
  },
);
