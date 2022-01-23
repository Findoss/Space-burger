import React from 'react';
import cn from 'classnames';

import { Image } from 'components/Image';
import { IngredientParams } from 'enums/Ingredients';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const IngredientDetails = ({
  image = '',
  name = '',
  params = undefined,
  className = undefined,
}: Props) => {
  const { t } = useTranslation();

  return (
    <div className={cn(styles.ingredient_info, className)}>
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
              return (
                <div key={param} className={cn(styles.param_item)}>
                  <div
                    className={cn(
                      'text_type_main-default mb-2',
                      styles.param_item_key,
                    )}
                  >
                    {t(
                      `ingredients.params.${
                        IngredientParams[param as IngredientParams]
                      }`,
                    )}
                  </div>
                  <div
                    className={cn(
                      'text_type_digits-default',
                      styles.param_item_value,
                    )}
                  >
                    {String(value)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
