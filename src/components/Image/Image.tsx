import React from 'react';
import cn from 'classnames';

import styles from './image.module.css';

import type { Props } from './types';

export const Image = ({ src, alt, extraClass = undefined }: Props) => {
  return (
    <picture>
      {/* <source srcset={} media="(min-width: 600px)" /> */}
      <img className={cn(styles.image, extraClass)} src={src} alt={alt} />
    </picture>
  );
};
