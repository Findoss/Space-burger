import React from 'react';
import cn from 'classnames';

import { BurgerConstructorItem } from 'components/BurgerConstructorItem';

import styles from './styles.module.css';

import type { Props } from './types';

export const BurgerConstructor = ({
  ingredientTop,
  ingredientBottom,
  ingredients,
  className = undefined,
}: Props) => {
  const style = cn(
    styles.burger_constructor,
    ' pt-25 pl-4 pr-4 pb-10',
    className,
  );
  return (
    <div className={style}>
      <BurgerConstructorItem {...ingredientTop} />
      <div className={cn('custom-scroll', styles.constructor_main)}>
        {ingredients.map((ingredient) => {
          return <BurgerConstructorItem {...ingredient} />;
        })}
      </div>
      <BurgerConstructorItem {...ingredientBottom} />
    </div>
  );
};
