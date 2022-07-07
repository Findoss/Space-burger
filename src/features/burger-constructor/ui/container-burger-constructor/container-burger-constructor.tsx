import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'shared/hooks/use-redux';
import { useTranslation } from 'react-i18next';
import { useDrop } from 'react-dnd';

import { DRAG } from 'shared/enums/drag';
import { BurgerConstructor } from 'shared/ui/burger-constructor';
import { ContainerBurgerConstructorItem } from '../container-burger-constructor-item';

import { selectOrderBun, selectOrderFilling } from '../../model/selectors';
import { swapIngredientOrder } from '../../model/slice';

import { mapParamDrop } from '../../utils/map-param-drop';

import styles from './container-burger-constructor.module.css';

import type { Props } from './types';

export const ContainerBurgerConstructor = ({}: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const ingredientsFilling = useSelector(selectOrderFilling);
  const ingredientsBun = useSelector(selectOrderBun);

  const z1 = useDrop(() => ({
    accept: DRAG.ITEM_A,
    drop: () => ({ name: DRAG.BOX_A }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const zoneA = mapParamDrop(z1);

  const z2 = useDrop(() => ({
    accept: DRAG.ITEM_B,
    drop: () => ({ name: DRAG.BOX_B }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const zoneB = mapParamDrop(z2);

  const handlerMove = (dragIndex: number, hoverIndex: number) => {
    dispatch(swapIngredientOrder({ dragIndex, hoverIndex }));
  };

  return (
    <BurgerConstructor
      ref={zoneB.$el}
      role={DRAG.BOX_B}
      extraClass={cn({
        [styles.box_drop]: zoneB.canDrop,
        [styles.box_drop_active]: zoneB.isActive,
      })}
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
      {ingredientsFilling.length ? (
        <div
          ref={zoneA.$el}
          role={DRAG.BOX_A}
          className={cn(
            'custom-scroll pr-4 pl-6 pt-6 pb-6',
            { [styles.box_drop]: zoneA.isActive },
            styles.constructor_main,
          )}
        >
          {ingredientsFilling.map(({ id, key }, i) => (
            <ContainerBurgerConstructorItem
              id={id}
              key={key}
              index={i}
              moveCard={handlerMove}
            />
          ))}
        </div>
      ) : null}
    </BurgerConstructor>
  );
};
