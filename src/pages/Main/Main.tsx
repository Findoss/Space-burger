import React from 'react';
import cn from 'classnames';

import { Main as MainLayout } from 'layouts/Main';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureMain = ({ className = undefined }: Props) => {
  const style = cn(styles.main, className);

  return <div className={style}>Main</div>;
};

export const Main = () => {
  return (
    <MainLayout>
      <PureMain></PureMain>
    </MainLayout>
  );
};
