import React, { forwardRef } from 'react';
import cn from 'classnames';
import { useSelector } from 'shared/hooks/use-redux';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'entities/ingredient/hooks';

import { ContainerIngredient } from '../container-ingredient';
import { IngredientList } from 'shared/ui/ingredient-list';
import { Loader } from 'shared/ui/loader';
import { Error } from 'shared/ui/error';

import { selectIngredientsByType } from 'entities/ingredient/selectors';

import type { Props } from './types';

export const ContainerIngredientList = forwardRef<HTMLDivElement, Props>(
  ({ type }, ref) => {
    const { t } = useTranslation();

    const { data, isError, isLoading } = useGetIngredientQuery();
    const dataIdIngredients = useSelector(selectIngredientsByType(type));

    if (isError) {
      return <Error error={t('global.error')} />;
    }

    if (isLoading) {
      return <Loader />;
    }

    if (data) {
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
