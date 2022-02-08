import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';
import { useDrag, useDrop } from 'react-dnd';

import { DRAG } from 'enums/drag';
import { Ingredient } from 'components/ingredient';

import { selectIngredientById } from 'store/Ingredient/selectors';
import { setActualIngredient } from '../service/slice';

import { selectCountIngredientById } from 'features/burger-constructor/service/selectors';
import { addIngredientOrder } from 'features/burger-constructor/service/slice';

import styles from './style.module.css';

import type { Props } from './types';

export const ContainerIngredient = ({ id = '' }: Props) => {
  const data = useSelector(selectIngredientById(id));
  const count = useSelector(selectCountIngredientById(id));
  const dispatch = useDispatch();

  const [{ isDragging }, $elDrag] = useDrag(() => ({
    type: DRAG.ITEM_B,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<any>();
      if (item && dropResult) {
        dispatch(addIngredientOrder({ id: id, type: data.type }));
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  }));

  return (
    <Ingredient
      ref={$elDrag}
      id={id}
      name={data.name}
      image={data.image}
      price={data.price}
      count={count}
      extraClass={cn(styles.draggle, { [styles.drag]: isDragging })}
      onClick={() => dispatch(setActualIngredient(id))}
    />
  );
};
