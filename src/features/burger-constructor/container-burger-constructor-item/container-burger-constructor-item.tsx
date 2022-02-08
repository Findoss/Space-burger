import React, { useRef } from 'react';
import cn from 'classnames';
import { useDrag, useDrop, DropTargetMonitor } from 'react-dnd';
import { useDispatch, useSelector } from 'shared/hooks/use-кedux';
import { XYCoord } from 'dnd-core';

import { DRAG } from 'enums/drag';
import { BurgerConstructorItem } from 'components/burger-constructor-item';

import { selectIngredientById } from 'app/store/ingredient/selectors';
import { removeIngredientOrder } from '../service/slice';

import styles from './container-burger-constructor-item.module.css';

import type { IngredientId } from 'shared/api/ingredient/types';
import type { Props, DragObject } from './types';

export const ContainerBurgerConstructorItem = ({
  id,
  index,
  moveCard,
}: Props) => {
  const dispatch = useDispatch();
  const data = useSelector(selectIngredientById(id));

  const $el = useRef<HTMLDivElement>(null);
  const [{ handlerId }, drop] = useDrop({
    accept: DRAG.ITEM_A,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item: DragObject, monitor: DropTargetMonitor) {
      if (!$el.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = $el.current?.getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveCard(dragIndex, hoverIndex);

      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: DRAG.ITEM_A,
    item: () => {
      return { id, index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop($el));

  const handlerRemove = (id: IngredientId) => {
    dispatch(removeIngredientOrder(id));
  };

  return (
    <BurgerConstructorItem
      ref={$el}
      text={data.name}
      price={data.price}
      thumbnail={data.imageMobile}
      isLocked={false}
      onRemove={() => handlerRemove(id)}
      data-handler-id={handlerId}
      extraClass={cn({ [styles.dragging]: isDragging })}
    />
  );
};
