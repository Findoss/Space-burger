import React, { forwardRef } from 'react';
import cn from 'classnames';

import styles from './ingredient-list.module.css';

import type { Props } from './types';

export const IngredientList = forwardRef<HTMLDivElement, Props>(
  (
    { title = '', children = null, extraClass = undefined, onClick = () => {} },
    ref,
  ) => {
    return (
      <div ref={ref} className={cn(styles.ingredient, extraClass)}>
        <h2
          className={cn(styles.ingredient_title, 'text text_type_main-medium')}
        >
          {title}
        </h2>
        <div
          className={cn(
            styles.ingredient_list,
            'custom-scroll pt-6 pr-4 pl-4 pb-10',
          )}
        >
          {children}
        </div>
      </div>
    );
  },
);
