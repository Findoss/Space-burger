import React from 'react';
import cn from 'classnames';

import { Link } from 'react-router-dom';

import styles from './nav-button.module.css';

import type { Props } from './types';

export const NavButton = ({
  to,
  icon = null,
  title,
  onClick,
  extraClass = undefined,
  active = false,
}: Props) => {
  return (
    <Link
      to={to}
      className={cn('pl-5 pr-5', styles.item, extraClass)}
      onClick={onClick}
    >
      {icon}
      <div
        className={cn(
          'text text_type_main-default  ml-2',
          active ? 'text_color_primary' : 'text_color_inactive',
          styles.title,
        )}
      >
        {title}
      </div>
    </Link>
  );
};
