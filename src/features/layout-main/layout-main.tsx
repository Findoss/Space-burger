import React from 'react';
import type { Props } from './types';

import { AppHeader } from 'features/app-header';

export const Main = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
