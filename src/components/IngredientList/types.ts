import { Props as IngredientProps } from 'components/Ingredient/types';

export type Props = {
  title?: string;
  ingredients?: IngredientProps[];
  className?: string;
};
