import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { useDrag } from 'react-dnd';

import { DRAG } from 'shared/enums/drag';
import { Ingredient } from 'shared/ui/ingredient';
import { IngredientsType } from 'shared/enums/ingredient';

import { setActualIngredient } from '../service/slice';

import { selectCountIngredientById } from 'features/burger-constructor/service/selectors';
import {
  addIngredientOrder,
  addBunOrder,
} from 'features/burger-constructor/service/slice';

import { selectIngredientById } from 'app/store/ingredient/selectors';

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
