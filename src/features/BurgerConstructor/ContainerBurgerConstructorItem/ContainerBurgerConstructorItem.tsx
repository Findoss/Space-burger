import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';

import { BurgerConstructorItem } from 'components/BurgerConstructorItem';

import { selectIngredientById } from 'store/Ingredients/selectors';
import { removeIngredientOrder } from '../service/slice';

import style from './styles.module.css';

import type { IngredientId } from 'api/Ingredients/types';
import type { Props } from './types';

export const ContainerBurgerConstructorItem = ({ id }: Props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectIngredientById(id));

  const handlerRemove = (id: IngredientId) => {
    dispatch(removeIngredientOrder(id));
  };

  return (
    <BurgerConstructorItem
      thumbnail={data.imageMobile}
      price={data.price}
      text={data.name}
      isLocked={false}
      onRemove={() => handlerRemove(id)}
    />
  );
};
