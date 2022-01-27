import React from 'react';
import cn from 'classnames';

import { IngredientList } from 'components/IngredientList';

import type { Props } from './types';

export const ContainerIngredientList = ({}: Props) => {
  return <IngredientList title="" ingredients={[]} onClick={() => {}} />;
};
