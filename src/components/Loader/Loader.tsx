import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const Loader = ({ type, className = undefined }: Props) => {
  return (
    <div
      className={cn(
        styles.loader,
        { [styles.loader_text]: type === 'text' },
        className,
      )}
    />
  );
};
