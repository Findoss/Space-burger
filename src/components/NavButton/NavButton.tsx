import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureNavButton = ({
  className = undefined,
  to,
  icon,
  title,
  onClick,
}: Props) => {
  return (
    <Link
      to={to}
      className={cn(styles.item, 'pl-5 pr-5', className)}
      onClick={onClick}
    >
      {icon}
      <div className={cn(styles.title, 'ml-2')}>{title}</div>
    </Link>
  );
};
