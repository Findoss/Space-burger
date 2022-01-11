import React from 'react';
import type { Props } from './types';

import { Header } from 'components/Header';

export const Main = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};
