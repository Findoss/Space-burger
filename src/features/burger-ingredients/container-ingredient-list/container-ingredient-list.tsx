import React, { forwardRef } from 'react';
import cn from 'classnames';
import { useSelector } from 'shared/hooks/use-кedux';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'app/store/ingredient/hooks';

import { ContainerIngredient } from '../container-ingredient';
import { IngredientList } from 'shared/components/ingredient-list';
import { Loader } from 'shared/components/loader';
import { Error } from 'shared/components/error';

import { selectIngredientsByType } from 'app/store/ingredient/selectors';

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
