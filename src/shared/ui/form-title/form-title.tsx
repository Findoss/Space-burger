import React from 'react';
import cn from 'classnames';

import type { Props } from './types';

export const FormTitle = ({ extraClass = undefined, children }: Props) => {
  return (
    <span className={cn('mb-5  mt-10 text text_type_main-medium')}>
      {children}
    </span>
  );
};
