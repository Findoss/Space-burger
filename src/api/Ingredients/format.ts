import type { IngredientsRaw, Ingredients } from './types';

export const formatIngredients = ({ data }: IngredientsRaw): Ingredients => {
  const formatted = data.data.map(
    ({ _id, image_mobile, image_large, __v, ...props }) => {
      return {
        id: _id,
        imageMobile: image_mobile,
        imageLarge: image_large,
        v: __v,
        ...props,
      };
    },
  );

  return formatted;
};
