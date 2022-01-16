import type { IngredientsEntity } from 'api/Ingredients/types';

export const selectIngredientsList = (
  entities: IngredientsEntity,
  typeIngredient = 'main',
) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type === typeIngredient)
      .map(({ id, image, name, price }) => {
        return {
          id,
          image,
          name,
          price,
        };
      });
  }
};

export const selectIngredientsConstruct = (entities: IngredientsEntity) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients).map(
      ({ id, imageMobile, name, price }) => {
        return {
          id,
          price,
          text: name,
          thumbnail: imageMobile,
        };
      },
    );
  }
};

export const selectIngredientsConstructLocked = (
  entities: IngredientsEntity,
) => {
  const ingredients = entities?.entities.ingredients;
  if (ingredients) {
    return Object.values(ingredients)
      .filter(({ type }) => type === 'bun')
      .map(({ id, imageMobile, name, price }) => {
        return {
          id,
          price,
          text: name,
          thumbnail: imageMobile,
        };
      })
      .slice(0, 2);
  }
};
