import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'shared/hooks/use-redux';

import { BurgerConstructorCalc } from 'shared/ui/burger-constructor-calc';

import { selectRoleUser } from 'entities/user/model/selectors';
import { selectOrderBun, selectSumOrder } from '../../model/selectors';
import { toggleModalOrder } from '../../model/slice';

import styles from './container-burger-constructor-calc.module.css';

import type { Props } from './types';

export const ContainerBurgerConstructorCalc = ({ extraClass }: Props) => {
  const dispatch = useDispatch();
  const sumOrder = useSelector(selectSumOrder);
  const bumOrder = useSelector(selectOrderBun);
  const roleUser = useSelector(selectRoleUser);
  const { t } = useTranslation();

  const disabled =
    sumOrder === 0 || bumOrder === undefined || roleUser !== 'interior';

  const handlerClick = () => {
    dispatch(toggleModalOrder());
  };

  return (
    <BurgerConstructorCalc
      extraClass={extraClass}
      sumOrder={sumOrder}
      textButton={t('constructor.buy')}
      onClick={handlerClick}
      disabled={disabled}
    />
  );
};
