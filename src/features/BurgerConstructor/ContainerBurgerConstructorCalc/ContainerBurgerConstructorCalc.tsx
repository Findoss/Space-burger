import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/useRedux';

import { BurgerConstructorCalc } from 'components/BurgerConstructorCalc';

import { selectSumOrder } from '../service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const ContainerBurgerConstructorCalc = ({ extraClass }: Props) => {
  const sumOrder = useSelector(selectSumOrder) || 0;
  const { t } = useTranslation();

  return (
    <BurgerConstructorCalc
      extraClass={extraClass}
      sumOrder={sumOrder}
      textButton={t('constructor.buy')}
    />
  );
};
