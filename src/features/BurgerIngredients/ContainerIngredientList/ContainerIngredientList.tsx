import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/redux';
import { useTranslation } from 'react-i18next';
import { useGetIngredientQuery } from 'store/Ingredients/hooks';

import { ContainerIngredient } from '../ContainerIngredient';
import { IngredientList } from 'components/IngredientList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { selectIngredientsByType } from 'store/Ingredients/selectors';

import type { Props } from './types';

export const ContainerIngredientList = ({ type }: Props) => {
  const { data, isError, isLoading } = useGetIngredientQuery();
  const dataIdIngredients = useSelector(selectIngredientsByType(type));
  const { t } = useTranslation();

  if (isError) {
    return <Error error={t('global.error')} />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return (
      <IngredientList title={t(`constructor.${type}`)}>
        {dataIdIngredients.map((id) => (
          <ContainerIngredient id={id} />
        ))}
      </IngredientList>
    );
  }

  return null;
};
