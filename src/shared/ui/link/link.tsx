import React from 'react';
import cn from 'classnames';

import { Link as LinkRRD } from 'react-router-dom';

import styles from './link.module.css';

import type { Props } from './types';

export const Link = ({
  to = '',
  extraClass = undefined,
  children = null,
}: Props) => {
  return (
    <LinkRRD to={to} className={cn(styles.link, extraClass)}>
      <span className={styles.title}>{children}</span>
    </LinkRRD>
  );
};
