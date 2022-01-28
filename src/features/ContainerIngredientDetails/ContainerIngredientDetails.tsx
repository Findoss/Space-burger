import React from 'react';
import { useTranslation } from 'react-i18next';

import { IngredientDetails } from 'components/IngredientDetails';
import { IngredientParam } from 'components/IngredientParam';
import { IngredientParams } from 'enums/Ingredients';

import type { Props } from './types';

export const ContainerIngredientDetails = ({}: Props) => {
  const { t } = useTranslation();

  const image = 'https://code.s3.yandex.net/react/code/meat-04-large.png';
  const name = 'Говяжий метеорит (отбивная)';
  const params = {
    calories: 420,
    proteins: 80,
    fat: 24,
    carbohydrates: 53,
  };

  return (
    <IngredientDetails image={image} name={name}>
      {params &&
        Object.entries(params).map(([param, value]) => {
          const title = t(
            `ingredients.params.${IngredientParams[param as IngredientParams]}`,
          );

          return (
            <IngredientParam key={param} title={title} value={String(value)} />
          );
        })}
    </IngredientDetails>
  );
};
