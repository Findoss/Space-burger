import React from 'react';
import { t } from 'i18next';
import { useSelector } from 'shared/hooks/use-redux';

import { IngredientParams } from 'shared/enums/ingredient';

import { IngredientParam } from 'shared/ui/ingredient-param';
import { IngredientDetails } from 'shared/ui/ingredient-details';
import { selectIngredientById } from 'app/store/ingredient/selectors';

import type { Props } from './types';
import type { Ingredient } from 'shared/api/ingredient/types';

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
