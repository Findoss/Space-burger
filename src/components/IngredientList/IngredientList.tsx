import React from 'react';
import cn from 'classnames';

import { PureIngredient } from 'components/Ingredient';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureIngredientList = ({
  title,
  ingredients,
  className = undefined,
}: Props) => {
  const style = cn(styles.ingredient, className);

  return (
    <div className={style}>
      <h2 className={styles.ingredient_title}>{title}</h2>
      <div
        className={cn(
          styles.ingredient_list,
          'custom-scroll pt-6 pr-4 pl-4 pb-10',
        )}
      >
        {ingredients.map(({ id, name, price, image, count }) => {
          return (
            <PureIngredient
              className={styles.ingredient_item}
              count={count}
              id={id}
              key={id}
              name={name}
              price={price}
              image={image}
            />
          );
        })}
      </div>
    </div>
  );
};
