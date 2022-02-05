import React from 'react';
import cn from 'classnames';
import { useSelector, useDispatch } from 'hooks/useRedux';

import { BurgerConstructorCalc } from 'components/BurgerConstructorCalc';

import { selectOrderBun, selectSumOrder } from '../service/selectors';
import { toggleModalOrder } from '../service/slice';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const ContainerBurgerConstructorCalc = ({ extraClass }: Props) => {
  const dispatch = useDispatch();
  const sumOrder = useSelector(selectSumOrder);
  const bumOrder = useSelector(selectOrderBun);
  const { t } = useTranslation();

  const disabled = sumOrder === 0 || bumOrder === undefined;

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
