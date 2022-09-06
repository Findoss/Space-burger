import React, { forwardRef } from 'react';
import cn from 'classnames';

import { BurgerConstructorItem } from 'shared/ui/burger-constructor-item';
import {
  BurgerConstructorMainEmpty,
  BurgerConstructorBottomEmpty,
  BurgerConstructorTopEmpty,
} from 'shared/ui/burger-constructor-empty';

import { BunTypePosition } from 'shared/enums/ingredient';

import type { Props } from './types';

import styles from './burger-constructor.module.css';

export const BurgerConstructor = forwardRef<HTMLDivElement, Props>(
  (
    {
      children = undefined,
      ingredientTop = undefined,
      ingredientBottom = undefined,
      text = {
        topEmpty: 'textTopEmpty;',
        bottomEmpty: 'textBottomEmpty;',
        mainEmpty: 'textMainEmpty;',
        bunTop: 'textBunTop',
        bunBottom: 'textBunBottom',
      },
      extraClass = undefined,
    },
    ref,
  ) => {
    return (
      <div
        test-id="burger-constructor"
        ref={ref}
        className={cn(
          'mt-15 pt-10 pb-10 pr-8',
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

        {children !== null ? (
          children
        ) : (
          <BurgerConstructorMainEmpty text={text.mainEmpty} />
        )}

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
  },
);
