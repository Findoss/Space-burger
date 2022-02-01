import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { BurgerConstructorItem } from 'components/BurgerConstructorItem';
import {
  BurgerConstructorMainEmpty,
  BurgerConstructorBottomEmpty,
  BurgerConstructorTopEmpty,
} from 'components/BurgerConstructorEmpty';

import { BunTypePosition } from 'enums/Ingredients';

import type { Props } from './types';

import styles from './styles.module.css';

export const BurgerConstructor = ({
  ingredientTop = undefined,
  ingredientBottom = undefined,
  ingredients = [],
  text = {
    topEmpty: 'textTopEmpty;',
    bottomEmpty: 'textBottomEmpty;',
    mainEmpty: 'textMainEmpty;',
    bunTop: 'textBunTop',
    bunBottom: 'textBunBottom',
  },
  clickOrder = () => {},
  extraClass = undefined,
}: Props) => {
  const { t } = useTranslation();

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
          text={`${ingredientTop.text} (${text.bunTop})`}
          thumbnail={ingredientTop.thumbnail}
          price={ingredientTop.price}
        />
      ) : (
        <BurgerConstructorTopEmpty text={text.topEmpty} />
      )}
      <div className={cn('custom-scroll', styles.constructor_main)}>
        {ingredients.length ? (
          ingredients.map((ingredient) => {
            return (
              <BurgerConstructorItem key={ingredient.id} {...ingredient} />
            );
          })
        ) : (
          <BurgerConstructorMainEmpty text={text.mainEmpty} />
        )}
      </div>
      {ingredientBottom ? (
        <BurgerConstructorItem
          type={BunTypePosition.BOTTOM}
          isLocked={true}
          text={`${ingredientBottom.text} (${text.bunBottom})`}
          thumbnail={ingredientBottom.thumbnail}
          price={ingredientBottom.price}
        />
      ) : (
        <BurgerConstructorBottomEmpty text={text.bottomEmpty} />
      )}
    </div>
  );
};
