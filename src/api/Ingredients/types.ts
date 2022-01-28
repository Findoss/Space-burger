type IngredientId = string;

export type IngredientRaw = {
  _id: IngredientId;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
};
export type IngredientsRaw = { data: { data: IngredientRaw[] } };

export type Ingredient = {
  id: IngredientId;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  imageMobile: string;
  imageLarge: string;
  v: number;
};
export type Ingredients = Ingredient[];

export type IngredientsEntity = {
  entities: {
    ingredients: Record<string, Ingredient>;
  };
  result: IngredientId[];
};
