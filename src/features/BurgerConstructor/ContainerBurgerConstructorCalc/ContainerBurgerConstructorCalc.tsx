import React from 'react';
import cn from 'classnames';
import { useSelector } from 'hooks/useRedux';

import { BurgerConstructorCalc } from 'components/BurgerConstructorCalc';

import { selectSumOrder } from '../service/selectors';

import styles from './styles.module.css';

import type { Props } from './types';
import { useTranslation } from 'react-i18next';

export const ContainerBurgerConstructorCalc = ({}: Props) => {
  const sumOrder = useSelector(selectSumOrder);
  const { t } = useTranslation();

  console.log(isNaN(sumOrder));

  return (
    <BurgerConstructorCalc
      sumOrder={sumOrder ?? 0}
      textButton={t('constructor.buy')}
    />
  );
};
