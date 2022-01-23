import React from 'react';

import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const ModalOverlay = ({ onClick, extraClass = undefined }: Props) => {
  return (
    <div className={cn(styles.overlay, extraClass)} onClick={onClick}></div>
  );
};
