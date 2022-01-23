import { Props as IngredientProps } from 'components/Ingredient/types';

export type Props = {
  title?: string;
  ingredients?: IngredientProps[];
  extraClass?: string;
  onClick?: (id: string) => void;
};
