import type { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';
import type { ReactNode } from 'react';

export type IngredientLock = Omit<
  BurgerConstructorItemProps,
  'type' | 'isLocked'
>;

export type Props = {
  ingredientTop?: IngredientLock;
  ingredientBottom?: IngredientLock;
  children?: ReactNode;
  extraClass?: string;
  text?: {
    topEmpty?: string;
    bottomEmpty?: string;
    mainEmpty?: string;
    bunTop?: string;
    bunBottom?: string;
  };
};
