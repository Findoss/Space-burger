import { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';

type idIngredient = { id: string };

export type IngredientLock = Omit<
  BurgerConstructorItemProps,
  'type' | 'isLocked'
>;

export type IngredientsMain = (BurgerConstructorItemProps & idIngredient)[];

export type Props = {
  ingredientTop?: IngredientLock;
  ingredientBottom?: IngredientLock;
  ingredients: IngredientsMain;
  className?: string;
  clickOrder: () => void;
};
