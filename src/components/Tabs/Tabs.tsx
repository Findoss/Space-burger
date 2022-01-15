import React from 'react';
import cn from 'classnames';

import { useState } from 'react';
import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const Tabs = ({ tabs, className = undefined }: Props) => {
  const [current, setCurrent] = useState(tabs[0].key);
  const style = cn(styles.tabs, className);

  return (
    <div className={style}>
      {tabs.map(({ key, title }) => {
        return (
          <Tab
            key={key}
            value={key}
            active={current === key}
            onClick={setCurrent}
          >
            {title}
          </Tab>
        );
      })}
    </div>
  );
};
