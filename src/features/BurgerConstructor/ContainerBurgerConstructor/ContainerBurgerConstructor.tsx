import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';
import { useTranslation } from 'react-i18next';
import { useDrag, useDrop } from 'react-dnd';

import { DRAG } from 'enums/Drag';
import { BurgerConstructor } from 'components/BurgerConstructor';
import { ContainerBurgerConstructorItem } from '../ContainerBurgerConstructorItem';

import { selectOrderBun, selectOrderFilling } from '../service/selectors';
import { swapIngredientOrder } from '../service/slice';

import styles from './styles.module.css';

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
  // ! TODO переписать матчинг что за хрень
  const zoneA = {
    $el: z1[1],
    canDrop: z1[0].canDrop,
    isOver: z1[0].isOver,
    isActive: z1[0].canDrop && z1[0].isOver,
  };

  const z2 = useDrop(() => ({
    accept: DRAG.ITEM_B,
    drop: () => ({ name: DRAG.BOX_B }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const zoneB = {
    $el: z2[1],
    canDrop: z2[0].canDrop,
    isOver: z2[0].isOver,
    isActive: z2[0].canDrop && z2[0].isOver,
  };

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
