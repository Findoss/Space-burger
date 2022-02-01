import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';

import { Ingredient } from 'components/Ingredient';

import { selectIngredientById } from 'store/Ingredients/selectors';
import { setActualIngredient } from '../service/slice';
import { selectCountIngredientById } from '../../BurgerConstructor/service/selectors';

import type { Props } from './types';

export const ContainerIngredient = ({ id = '' }: Props) => {
  const data = useSelector(selectIngredientById(id));
  const count = useSelector(selectCountIngredientById(id));
  const dispatch = useDispatch();

  return (
    <Ingredient
      id={id}
      name={data.name}
      image={data.image}
      price={data.price}
      count={count}
      onClick={() => dispatch(setActualIngredient(id))}
    />
  );
};
