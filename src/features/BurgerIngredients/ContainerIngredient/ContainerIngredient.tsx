import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/redux';

import { Ingredient } from 'components/Ingredient';

import { selectIngredientById } from 'store/Ingredients/selectors';
import { setActualIngredient } from '../service/slice';

import type { Props } from './types';

export const ContainerIngredient = ({ id = '' }: Props) => {
  const data = useSelector(selectIngredientById(id));
  const dispatch = useDispatch();

  return (
    <Ingredient
      id={id}
      name={data.name}
      image={data.image}
      price={data.price}
      count={0}
      onClick={() => dispatch(setActualIngredient(id))}
    />
  );
};
