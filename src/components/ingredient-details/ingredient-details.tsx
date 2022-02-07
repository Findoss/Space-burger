import React from 'react';
import cn from 'classnames';

import { Image } from 'components/image';

import styles from './ingredient-details.module.css';

import type { Props } from './types';

export const IngredientDetails = ({
  image = '',
  name = '',
  children = null,
  extraClass = undefined,
}: Props) => {
  return (
    <div className={cn(styles.ingredient_info, extraClass)}>
      <div className={cn(styles.body)}>
        <div className={cn('mb-4', styles.image)}>
          <Image src={image} alt={name} />
        </div>
        <div className={cn('text text_type_main-medium mb-8', styles.name)}>
          {name}
        </div>
        <div
          className={cn(
            'text text_type_main-default text_color_inactive mb-5',
            styles.param_list,
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
