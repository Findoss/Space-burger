import React from 'react';
import cn from 'classnames';

import styles from './styles.module.css';

import type { Props } from './types';

export const WrapperCenterForm = ({ children, extraClass }: Props) => {
  return (
    <div className={cn(styles.wrapper_center_form, extraClass)}>{children}</div>
  );
};
