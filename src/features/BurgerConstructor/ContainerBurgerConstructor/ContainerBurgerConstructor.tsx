import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/useRedux';
import { useTranslation } from 'react-i18next';

import { BurgerConstructor } from 'components/BurgerConstructor';
import { ContainerBurgerConstructorItem } from '../ContainerBurgerConstructorItem';

import { selectOrderBun, selectOrderFilling } from '../service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';

export const ContainerBurgerConstructor = ({}: Props) => {
  const { t } = useTranslation();

  const ingredientsFilling = useSelector(selectOrderFilling);
  const ingredientsBun = useSelector(selectOrderBun);

  return (
    <BurgerConstructor
      text={{
        topEmpty: t('ingredients.bunEmpty'),
        mainEmpty: t('ingredients.mainEmpty'),
        bottomEmpty: t('ingredients.bunEmpty'),
        bunTop: t('ingredients.bunPosition.top'),
        bunBottom: t('ingredients.bunPosition.bottom'),
      }}
      ingredientTop={ingredientsBun}
      ingredientBottom={ingredientsBun}
    >
      {ingredientsFilling.length
        ? ingredientsFilling.map(({ id, key }) => (
            <ContainerBurgerConstructorItem id={id} key={key} />
          ))
        : undefined}
    </BurgerConstructor>
  );
};
