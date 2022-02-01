import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import {
  Button,
  CurrencyIcon,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { BurgerConstructorItem } from 'components/BurgerConstructorItem';
import { BunTypePosition } from 'enums/Ingredients';

import type { Props } from './types';

import styles from './styles.module.css';

export const BurgerConstructor = ({
  ingredientTop = undefined,
  ingredientBottom = undefined,
  ingredients = [],
  textTopEmpty = 'textTopEmpty;',
  textMainEmpty = 'textMainEmpty;',
  textBottomEmpty = 'textBottomEmpty;',
  clickOrder = () => {},
  extraClass = undefined,
}: Props) => {
  const { t } = useTranslation();
  const [sumOrder, setSumOrder] = useState(0);

  useEffect(() => {
    setSumOrder(() => {
      let sumBun = 0;
      if (ingredientTop) {
        sumBun += ingredientTop.price;
      }

      if (ingredientBottom) {
        sumBun += ingredientBottom.price;
      }

      const sumIngredients = ingredients.reduce(
        (acc, ingredient) => (acc += ingredient.price),
        0,
      );
      return sumBun + sumIngredients;
    });
  }, [ingredients, ingredientTop, ingredientBottom]);

  const textBunTop = t(`ingredients.bunPosition.${BunTypePosition.TOP}`);
  const textBunBottom = t(`ingredients.bunPosition.${BunTypePosition.BOTTOM}`);

  return (
    <div
      className={cn(
        ' pt-25 pl-4 pr-4 pb-10',
        styles.burger_constructor,
        extraClass,
      )}
    >
      {ingredientTop ? (
        <BurgerConstructorItem
          type={BunTypePosition.TOP}
          isLocked={true}
          text={`${ingredientTop.text} (${textBunTop})`}
          thumbnail={ingredientTop.thumbnail}
          price={ingredientTop.price}
        />
      ) : (
        <div
          className={cn(
            'text text_type_main-default text_color_inactive ml-8 mr-2',
            styles.constructor_top_empty,
          )}
        >
          {textTopEmpty}
        </div>
      )}
      <div className={cn('custom-scroll', styles.constructor_main)}>
        {ingredients.length ? (
          ingredients.map((ingredient) => {
            return (
              <BurgerConstructorItem key={ingredient.id} {...ingredient} />
            );
          })
        ) : (
          <div
            className={cn(
              'text text_type_main-default text_color_inactive ml-8',
              styles.constructor_main_empty,
            )}
          >
            {textMainEmpty}
          </div>
        )}
      </div>
      {ingredientBottom ? (
        <BurgerConstructorItem
          type={BunTypePosition.BOTTOM}
          isLocked={true}
          text={`${ingredientBottom.text} (${textBunBottom})`}
          thumbnail={ingredientBottom.thumbnail}
          price={ingredientBottom.price}
        />
      ) : (
        <div
          className={cn(
            'text text_type_main-default text_color_inactive ml-8 mr-2',
            styles.constructor_bottom_empty,
          )}
        >
          {textBottomEmpty}
        </div>
      )}
      <div className={cn(styles.constructor_price, 'mt-10')}>
        <div className="text text_type_digits-medium mr-10">
          {sumOrder}
          {'  '}
          <CurrencyIcon type="primary" />
        </div>
        <Button onClick={clickOrder}>
          <div className={cn(styles.constructor_order_button)}>
            {t('constructor.buy')}
          </div>
        </Button>
      </div>
    </div>
  );
};
