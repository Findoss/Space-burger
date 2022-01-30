import React from 'react';
import { t } from 'i18next';
import { useSelector } from 'hooks/redux';

import { IngredientParams } from 'enums/Ingredients';

import { IngredientParam } from 'components/IngredientParam';
import { IngredientDetails } from 'components/IngredientDetails';
import { selectIngredientById } from 'store/Ingredients/selectors';

import type { Props } from './types';
import type { Ingredient } from 'api/Ingredients/types';

export const ContainerIngredientDetails = ({ id }: Props) => {
  const data = useSelector(selectIngredientById(id));

  if (data === undefined) {
    return null;
  }

  return (
    <IngredientDetails name={data.name} image={data.imageLarge}>
      {Object.keys(IngredientParams).map((param) => {
        return (
          <IngredientParam
            key={param}
            title={t(`ingredients.params.${param}`)}
            value={data[param as keyof Ingredient]}
          />
        );
      })}
    </IngredientDetails>
  );
};
