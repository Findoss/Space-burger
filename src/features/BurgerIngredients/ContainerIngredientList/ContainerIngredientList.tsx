import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/redux';

import { IngredientList } from 'components/IngredientList';
import { Loader } from 'components/Loader';
import { Error } from 'components/Error';

import { useGetIngredientQuery } from 'store/Ingredients/hooks';
import { selectAllIngredients } from 'store/Ingredients/selectors';

import type { Props } from './types';

export const ContainerIngredientList = ({}: Props) => {
  const { data, isError, isLoading } = useGetIngredientQuery();
  const AllIngredients = useSelector(selectAllIngredients);

  if (isError) {
    return <Error error="Oh no, there was an error" />;
  }

  if (isLoading) {
    return <Loader />;
  }

  if (data) {
    return <IngredientList title="Test" ingredients={AllIngredients} />;
  }

  return null;
};
