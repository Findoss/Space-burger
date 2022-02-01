import React, { useCallback } from 'react';
import cn from 'classnames';

import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { IngredientsType } from 'enums/Ingredients';

import styles from './styles.module.css';

import type { Props } from './types';

export const Tabs = ({
  tabs,
  currentTab,
  onClick,
  extraClass = undefined,
}: Props) => {
  const handlerClick = useCallback((key: IngredientsType) => {
    onClick(key);
  }, []);

  console.log(tabs);

  return (
    <div className={cn(styles.tabs, extraClass)}>
      {tabs.map(({ key, title = '' }) => {
        console.log(title);

        return (
          <Tab
            key={key}
            value={key}
            active={key === currentTab}
            onClick={() => handlerClick(key as IngredientsType)}
          >
            {title}
          </Tab>
        );
      })}
    </div>
  );
};
