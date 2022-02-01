import React, { useCallback } from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';
import { useTranslation } from 'react-i18next';

import { BurgerConstructor } from 'components/BurgerConstructor';

import { selectOrderBun, selectOrderFilling } from '../service/selectors';
import { removeIngredientOrder } from '../service/slice';

import styles from './styles.module.css';

import type { Props } from './types';
import type { IngredientId } from 'api/Ingredients/types';

export const ContainerBurgerConstructor = ({}: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const ingredientsFilling = useSelector(selectOrderFilling);
  const ingredientsBun = useSelector(selectOrderBun);

  const handlerRemove = (id: IngredientId) => {
    dispatch(removeIngredientOrder(id));
  };

  return (
    <BurgerConstructor
      text={{
        topEmpty: t('ingredients.bunEmpty'),
        mainEmpty: t('ingredients.mainEmpty'),
        bottomEmpty: t('ingredients.bunEmpty'),
        bunTop: t('ingredients.bunPosition.top'),
        bunBottom: t('ingredients.bunPosition.bottom'),
      }}
      ingredients={ingredientsFilling}
      ingredientTop={ingredientsBun}
      ingredientBottom={ingredientsBun}
      onRemove={handlerRemove}
    />
  );
};
