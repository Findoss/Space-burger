import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const PureImage = ({ src, alt, className = undefined }: Props) => {
  const style = cn(styles.image, className);

  return <img className={style} src={src} alt={alt} />;
};
