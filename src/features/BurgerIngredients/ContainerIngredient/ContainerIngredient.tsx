import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/redux';

import { Ingredient } from 'components/Ingredient';

import { selectIngredientById } from 'store/Ingredients/selectors';

import type { Props } from './types';

export const ContainerIngredient = ({ id = '' }: Props) => {
  const data = useSelector(selectIngredientById(id));

  return (
    <Ingredient
      id={id}
      name={data.name}
      image={data.image}
      price={data.price}
      count={0}
      onClick={() => console.log('Ingredient')}
    />
  );
};
