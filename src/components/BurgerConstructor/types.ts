import { Props as BurgerConstructorItemProps } from 'components/BurgerConstructorItem/types';

export type Props = {
  ingredientTop: BurgerConstructorItemProps;
  ingredientBottom: BurgerConstructorItemProps;
  ingredients: BurgerConstructorItemProps[];
  className?: string;
};
