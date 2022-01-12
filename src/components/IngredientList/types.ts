import { Props as IngredientProps } from 'components/Ingredient/types';

export type Props = {
  ingredients: IngredientProps[];
  title: string;
  className?: string;
};
