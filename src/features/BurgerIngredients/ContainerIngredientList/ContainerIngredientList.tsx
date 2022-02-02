import React, { forwardRef } from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'store/Ingredients/hooks';

import { ContainerIngredient } from '../ContainerIngredient';
import { IngredientList } from 'components/IngredientList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { selectIngredientsByType } from 'store/Ingredients/selectors';

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
