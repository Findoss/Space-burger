export type Props = {
  image?: string;
  name?: string;
  params?: {
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
  };
  extraClass?: string;
};
