import { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';

type IngredientLock = Omit<BurgerConstructorItemProps, 'type' | 'isLocked'>;

export type Props = {
  ingredientTop: IngredientLock;
  ingredientBottom: IngredientLock;
  ingredients: BurgerConstructorItemProps[];
  className?: string;
};
