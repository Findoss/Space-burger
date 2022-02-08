import React, { forwardRef } from 'react';
import cn from 'classnames';

import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './burger-constructor-item.module.css';

import type { Props } from './types';

export const BurgerConstructorItem = forwardRef<HTMLDivElement, Props>(
  (
    {
      thumbnail,
      price,
      text,
      isLocked,
      type,
      onRemove = () => {},
      extraClass = undefined,
    },
    ref,
  ) => {
    const isDraggable = !isLocked && type === undefined;
    const isBottom = type === 'bottom';

    return (
      <div
        ref={ref}
        className={cn(
          styles.burger_ingredient,
          {
            [styles.burger_ingredient_bottom]: isBottom,
            'ml-8': !isDraggable,
          },
          extraClass,
        )}
      >
        {isDraggable && (
          <div className={cn(styles.burger_ingredient_drag, 'mr-2')}>
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
  },
);
