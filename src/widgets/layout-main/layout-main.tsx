import React from 'react';
import type { Props } from './types';

import { AppHeader } from 'widgets/app-header/app-header';

export const Main = ({ children }: Props) => {
  return (
    <>
      <AppHeader />
      {children}
    </>
  );
};
