import React from 'react';
import cn from 'classnames';
import { useSelector } from 'react-redux';

import { IngredientList } from 'components/IngredientList';

import { useGetIngredientQuery } from './service/hooks';
import { selectAllIngredients } from './service/selectors';

import type { Props } from './types';

export const ContainerIngredientList = ({}: Props) => {
  const { data, isError, isLoading } = useGetIngredientQuery();
  const AllIngredients = useSelector(selectAllIngredients);

  if (isError) {
    return <>Oh no, there was an error</>;
  }

  if (isLoading) {
    return <>Loading...</>;
  }

  if (data) {
    return <IngredientList title="Test" ingredients={AllIngredients} />;
  }

  return null;
};
