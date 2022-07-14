import { Ingredient } from 'shared/api/ingredient/types';

export type Props = {
  extraClass?: string;
  count?: number;
} & Ingredient;
