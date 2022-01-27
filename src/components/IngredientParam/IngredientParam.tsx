import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const IngredientParam = ({
  title = '',
  value = '',
  extraClass = undefined,
}: Props) => {
  return (
    <div className={cn(styles.param, extraClass)}>
      <div className={cn('text_type_main-default mb-2', styles.param_key)}>
        {/* {t(
          `ingredients.params.${
            IngredientParams[param as IngredientParams]
          }`,
        )} */}
        {title}
      </div>
      <div className={cn('text_type_digits-default', styles.param_value)}>
        {/* {String(value)} */}
        {String(value)}
      </div>
    </div>
  );
};
