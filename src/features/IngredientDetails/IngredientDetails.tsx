import React from 'react';
import cn from 'classnames';

import { Image } from 'components/Image';
import { IngredientParam } from 'components/IngredientParam';
import { IngredientParams } from 'enums/Ingredients';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const IngredientDetails = ({
  image = '',
  name = '',
  params = undefined,
  extraClass = undefined,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.ingredient_info, extraClass)}>
      <div className={cn(styles.body)}>
        <div className={cn('mb-4', styles.image)}>
          <Image src={image} alt="" />
        </div>
        <div className={cn('text text_type_main-medium mb-8', styles.name)}>
          {name}
        </div>
        <div
          className={cn(
            'text text_type_main-default text_color_inactive mb-5',
            styles.param_list,
          )}
        >
          {params &&
            Object.entries(params).map(([param, value]) => {
              const title = t(
                `ingredients.params.${
                  IngredientParams[param as IngredientParams]
                }`,
              );

              return (
                <IngredientParam
                  key={param}
                  title={title}
                  value={String(value)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};
