type smallIngredientProps = {
  name: string;
  price: number;
  count: number;
  image: string;
};

export type Props = {
  extraClass?: string;
  ingredients: smallIngredientProps[];
};
