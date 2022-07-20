import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { useDrag } from 'react-dnd';

import { DRAG } from 'shared/enums/drag';
import { Ingredient } from 'shared/ui/ingredient';
import { IngredientsType } from 'shared/enums/ingredient';

import { setActualIngredient } from '../../model/slice';

import { selectCountIngredientById } from 'features/burger-constructor/model/selectors';
import {
  addIngredientOrder,
  addBunOrder,
} from 'features/burger-constructor/model/slice';

import { selectIngredientById } from 'entities/ingredient/model/selectors';

import styles from './style.module.css';

import type { Props } from './types';
import { url } from 'shared/api/constants';

export const ContainerIngredient = ({ id = '' }: Props) => {
  const data = useSelector(selectIngredientById(id));
  const count = useSelector(selectCountIngredientById(id));
  const dispatch = useDispatch();

  const [{ isDragging }, $elDrag] = useDrag(() => ({
    type: DRAG.ITEM_B,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        if (data.type === IngredientsType.bells) {
          dispatch(addBunOrder({ id }));
        } else {
          dispatch(addIngredientOrder({ id }));
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  const handlerClick = () => {
    history.pushState({}, '', url(`/ingredients/${id}`));
    dispatch(setActualIngredient(id));
  };

  return (
    <Ingredient
      ref={$elDrag}
      id={id}
      name={data.name}
      image={data.image}
      price={data.price}
      count={count}
      extraClass={cn(styles.draggle, { [styles.drag]: isDragging })}
      onClick={handlerClick}
    />
  );
};
