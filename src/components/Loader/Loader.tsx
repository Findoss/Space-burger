import React from 'react';
import cn from 'classnames';

import { ReactComponent as LoaderIcon } from './assets/loader.svg';
import styles from './styles.module.css';

import type { Props } from './types';

export const Loader = ({ type, extraClass = undefined }: Props) => {
  return (
    <div
      className={cn(
        styles.loader,
        { [styles.loader_text]: type === 'text' },
        extraClass,
      )}
    >
      <LoaderIcon />
    </div>
  );
};
