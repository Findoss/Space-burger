import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const FullscreenProgress = ({ className = undefined }: Props) => {
  return (
    <div className={cn(styles.fullscreen_progress, className)}>loading</div>
  );
};
