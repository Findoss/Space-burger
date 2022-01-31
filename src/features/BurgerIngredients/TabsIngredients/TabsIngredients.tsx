import React from 'react';
import cn from 'classnames';
import { useDispatch, useSelector } from 'hooks/useRedux';

import { Tabs } from 'components/Tabs';
import { selectActualType } from '../service/selectors';
import { setActualType } from '../service/slice';

import styles from './styles.module.css';

import type { Props } from './types';

export const TabsIngredients = ({
  tabs,
  title = '',
  extraClass = undefined,
}: Props) => {
  const actualType = useSelector(selectActualType);
  const dispatch = useDispatch();

  return (
    <div className={cn(styles.burger_ingredients, extraClass)}>
      <div className="mb-5 text text_type_main-large">{title}</div>
      <div className="mb-10">
        <Tabs
          tabs={tabs}
          currentTab={actualType}
          onClick={(key) => dispatch(setActualType(key))}
        />
      </div>
    </div>
  );
};
