import React from 'react';
import type { Props } from './types';

import { AppHeader } from 'features/AppHeader';

export const Main = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
