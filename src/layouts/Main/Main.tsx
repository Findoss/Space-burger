import React from 'react';
import type { Props } from './types';

import { AppHeader } from 'components/Header';

export const Main = ({ children }: Props) => {
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};
