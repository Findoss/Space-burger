import React from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Main as MainLayout } from 'layouts/Main';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureMain = ({ className = undefined }: Props) => {
  const style = cn(styles.main, className);
  const { t } = useTranslation();

  return <div className={style}>{t('test')}</div>;
};

export const Main = () => {
  return (
    <MainLayout>
      <PureMain />
    </MainLayout>
  );
};
