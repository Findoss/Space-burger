import React from 'react';
import cn from 'classnames';

import { Image } from 'components/Image';

import styles from './styles.module.css';

import type { Props } from './types';

export const IngredientInfo = ({ className = undefined }: Props) => {
  return (
    <div className={cn(styles.ingredient_info, className)}>
      <div className={cn('text text_type_main-large', styles.title)}>
        Детали ингредиента
      </div>
      <div className={cn(styles.body)}>
        <div className={cn('mb-4', styles.image)}>
          <Image
            src={'https://code.s3.yandex.net/react/code/bun-02-large.png'}
            alt=""
          />
        </div>
        <div className={cn('text text_type_main-medium mb-8', styles.name)}>
          Биокотлета из марсианской Магнолии
        </div>
        <div
          className={cn(
            'text text_type_main-default text_color_inactive mb-5',
            styles.param_list,
          )}
        >
          {[
            {
              param: 'Калории,ккал',
              value: '244,4',
            },
            {
              param: 'Белки, г',
              value: '12,2',
            },
            {
              param: 'Жиры, г',
              value: '17,2',
            },
            {
              param: 'Углеводы, г',
              value: '10,2',
            },
          ].map(({ param, value }, i) => {
            return (
              <div key={i} className={cn(styles.param_item)}>
                <div
                  className={cn(
                    'text_type_main-default mb-2',
                    styles.param_item_key,
                  )}
                >
                  {param}
                </div>
                <div
                  className={cn(
                    'text_type_digits-default',
                    styles.param_item_value,
                  )}
                >
                  {value}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
