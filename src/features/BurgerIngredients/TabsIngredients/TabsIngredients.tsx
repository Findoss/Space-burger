import React, { useState } from 'react';
import cn from 'classnames';

import { Tabs } from 'components/Tabs';

import styles from './styles.module.css';

import type { Props } from './types';

export const TabsIngredients = ({
  tabs,
  title = '',
  extraClass = undefined,
}: Props) => {
  const [current, setCurrent] = useState(tabs[0].key); // TODO store

  return (
    <div className={cn(styles.burger_ingredients, extraClass)}>
      <div className="mb-5 text text_type_main-large">{title}</div>
      <div className="mb-10">
        <Tabs
          tabs={tabs}
          currentTab={current}
          onClick={(key) => setCurrent(key)}
        />
      </div>
    </div>
  );
};
