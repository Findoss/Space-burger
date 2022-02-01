import React from 'react';
import cn from 'classnames';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import style from './styles.module.css';

import type { Props } from './types';

export const BurgerConstructorItem = ({
  thumbnail,
  price,
  text,
  isLocked,
  type,
  onRemove = () => {},
}: Props) => {
  const isDraggable = !isLocked && type === undefined;
  const isBottom = type === 'bottom';

  return (
    <div
      className={cn(style.burger_ingredient, {
        [style.burger_ingredient_bottom]: isBottom,
        'ml-8': !isDraggable,
      })}
    >
      {isDraggable && (
        <div className={cn(style.burger_ingredient_drag, 'mr-2')}>
          <DragIcon type="secondary" />
        </div>
      )}
      <ConstructorElement
        type={type}
        isLocked={isLocked}
        text={text}
        price={price}
        thumbnail={thumbnail}
        handleClose={onRemove}
      />
    </div>
  );
};
