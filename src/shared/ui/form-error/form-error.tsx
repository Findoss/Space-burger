import React from 'react';
import cn from 'classnames';

import type { Props } from './types';

export const FormError = ({ extraClass = undefined, children }: Props) => {
  return (
    <div
      className={cn('text text_type_main-medium text_color_error', extraClass)}
    >
      {children}
    </div>
  );
};
