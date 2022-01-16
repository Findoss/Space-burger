import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorItem } from 'components/BurgerConstructorItem';

import type { Props } from './types';

import styles from './styles.module.css';

export const BurgerConstructor = ({
  ingredientTop,
  ingredientBottom,
  ingredients = [],
  className = undefined,
}: Props) => {
  const { t } = useTranslation();
  const style = cn(
    styles.burger_constructor,
    ' pt-25 pl-4 pr-4 pb-10',
    className,
  );

  return (
    <div className={style}>
      <BurgerConstructorItem type="top" isLocked={true} {...ingredientTop} />
      <div className={cn('custom-scroll', styles.constructor_main)}>
        {ingredients.length &&
          ingredients.map((ingredient) => {
            return (
              <BurgerConstructorItem key={ingredient.text} {...ingredient} />
            );
          })}
      </div>
      <BurgerConstructorItem
        type="bottom"
        isLocked={true}
        {...ingredientBottom}
      />
      <div className={cn(styles.constructor_price, 'mt-10')}>
        <div className="text text_type_digits-medium mr-10">
          600 {'  '}
          <CurrencyIcon type="primary" />
        </div>
        <Button>{t('constructor.buy')}</Button>
      </div>
    </div>
  );
};
