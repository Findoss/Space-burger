import type { IngredientsEntity } from 'api/Ingredients/types';
import { IngredientsType } from 'enums/Ingredients';

export const selectIngredientsList = (
  entities: IngredientsEntity,
  typeIngredient = IngredientsType.filling,
) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type === typeIngredient)
      .map(({ id, image, name, price }) => ({
        id,
        image,
        name,
        price,
      }));
  }
};

export const selectIngredientsConstruct = (entities: IngredientsEntity) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type !== IngredientsType.bells)
      .map(({ id, imageMobile, name, price }) => ({
        id,
        price,
        text: name,
        thumbnail: imageMobile,
      }));
  }
};

export const selectIngredientsConstructLocked = (
  entities: IngredientsEntity,
) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type === IngredientsType.bells)
      .map(({ id, imageMobile, name, price }) => ({
        id,
        price,
        text: name,
        thumbnail: imageMobile,
      }))
      .slice(0, 2);
  }
  return [];
};
