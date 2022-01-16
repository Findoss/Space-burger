import React from 'react';
import type { Props } from './types';

import { AppHeader } from 'components/AppHeader';

export const Main = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
