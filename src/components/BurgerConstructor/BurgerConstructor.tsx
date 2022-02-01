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
  onRemove = () => {},
  extraClass = undefined,
}: Props) => {
  return (
    <div className={cn('pt-25 pb-10', styles.burger_constructor, extraClass)}>
      {ingredientTop ? (
        <BurgerConstructorItem
          id={ingredientTop.id}
          type={BunTypePosition.TOP}
          isLocked={true}
          text={`${ingredientTop.text} (${text.bunTop})`}
          thumbnail={ingredientTop.thumbnail}
          price={ingredientTop.price}
        />
      ) : (
        <BurgerConstructorTopEmpty text={text.topEmpty} />
      )}
      <div className={cn('custom-scroll pr-4 pl-6', styles.constructor_main)}>
        {ingredients.length ? (
          ingredients.map((ingredient) => {
            return (
              <BurgerConstructorItem
                onRemove={() => onRemove(ingredient.id)}
                key={ingredient.key}
                {...ingredient}
              />
            );
          })
        ) : (
          <BurgerConstructorMainEmpty text={text.mainEmpty} />
        )}
      </div>
      {ingredientBottom ? (
        <BurgerConstructorItem
          id={ingredientBottom.id}
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
