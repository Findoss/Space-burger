import React, { Children } from 'react';
import cn from 'classnames';

import { Ingredient } from 'components/Ingredient';

import styles from './styles.module.css';

import type { Props } from './types';

export const IngredientList = ({
  title = '',
  children = null,
  extraClass = undefined,
  onClick = () => {},
}: Props) => {
  return (
    <div className={cn(styles.ingredient, extraClass)}>
      <h2 className={cn(styles.ingredient_title, 'text text_type_main-medium')}>
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
};
