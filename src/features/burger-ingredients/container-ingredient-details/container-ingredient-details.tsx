import React from 'react';
import { t } from 'i18next';
import { useSelector } from 'hooks/useRedux';

import { IngredientParams } from 'enums/Ingredient';

import { IngredientParam } from 'components/ingredient-param';
import { IngredientDetails } from 'components/ingredient-details';
import { selectIngredientById } from 'store/Ingredient/selectors';

import type { Props } from './types';
import type { Ingredient } from 'api/Ingredient/types';

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
