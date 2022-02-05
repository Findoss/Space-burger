import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const Error = ({ error = 'error', extraClass = undefined }: Props) => {
  return (
    <div
      className={cn('text text_type_main-default', styles.error, extraClass)}
    >
      {error}
    </div>
  );
};
