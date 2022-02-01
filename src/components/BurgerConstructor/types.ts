import { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';

export type IngredientLock = Omit<
  BurgerConstructorItemProps,
  'type' | 'isLocked'
>;

export type IngredientsMain = BurgerConstructorItemProps[];

export type Props = {
  ingredientTop?: IngredientLock;
  ingredientBottom?: IngredientLock;
  ingredients?: IngredientsMain;
  extraClass?: string;
  text?: {
    topEmpty?: string;
    bottomEmpty?: string;
    mainEmpty?: string;
    bunTop?: string;
    bunBottom?: string;
  };
};
