import React from 'react';
import cn from 'classnames';

import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureNavButton = ({
  className = undefined,
  icon,
  title,
  onClick,
}: Props) => {
  return (
    <Button type="secondary" size="small" onClick={onClick}>
      <div className={cn(styles.item, className)}>
        {icon}
        <div className={cn(styles.title, 'ml-2')}>{title}</div>
      </div>
    </Button>
  );
};
