import React from 'react';
import cn from 'classnames';

import { ContainerIngredientList } from 'features/ContainerIngredientList';

import { Main } from 'layouts/Main';

import styles from './styles.module.css';

import type { Props } from './types';

export const Test = ({}: Props) => {
  return <ContainerIngredientList />;
};

export const PageTest = () => {
  return (
    <Main>
      <Test />
    </Main>
  );
};
