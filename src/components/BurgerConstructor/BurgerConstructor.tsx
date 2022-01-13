import React from 'react';
import cn from 'classnames';

import { PureBurgerConstructorItem } from 'components/BurgerConstructorItem';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureBurgerConstructor = ({
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
      <PureBurgerConstructorItem {...ingredientTop} />
      <div className={cn('custom-scroll', styles.constructor_main)}>
        {ingredients.map((ingredient) => {
          return <PureBurgerConstructorItem {...ingredient} />;
        })}
      </div>
      <PureBurgerConstructorItem {...ingredientBottom} />
    </div>
  );
};
