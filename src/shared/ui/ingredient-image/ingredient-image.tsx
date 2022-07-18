import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const IngredientImage = ({
  extraClass = undefined,
  style = {},
  image = '',
  children = null,
}: Props) => {
  return (
    <div
      className={cn(styles.ingredient_image, extraClass)}
      style={{
        backgroundImage: `url(${image})`,
        ...style,
      }}
    >
      {children}
    </div>
  );
};
