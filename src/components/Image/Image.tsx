import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const Image = ({ src, alt, extraClass = undefined }: Props) => {
  return <img className={cn(styles.image, extraClass)} src={src} alt={alt} />;
};
