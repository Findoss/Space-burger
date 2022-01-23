import React from 'react';
import cn from 'classnames';

import { Ingredient } from 'components/Ingredient';

import styles from './styles.module.css';

import type { Props } from './types';

export const IngredientList = ({
  title = '',
  ingredients = [],
  className = undefined,
  onClick = () => {},
}: Props) => {
  return (
    <div className={cn(styles.ingredient, className)}>
      <h2 className={cn(styles.ingredient_title, 'text text_type_main-medium')}>
        {title}
      </h2>
      <div
        className={cn(
          styles.ingredient_list,
          'custom-scroll pt-6 pr-4 pl-4 pb-10',
        )}
      >
        {ingredients.map(({ id, name, price, image, count }) => {
          return (
            <Ingredient
              className={styles.ingredient_item}
              count={count}
              id={id}
              key={id}
              name={name}
              price={price}
              image={image}
              onClick={() => onClick(id)}
            />
          );
        })}
      </div>
    </div>
  );
};
