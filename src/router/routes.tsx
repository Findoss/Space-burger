import React from 'react';
import type { Routes } from './types';

import { Main } from 'pages/Main';

export const routes: Routes = [
  {
    path: '/',
    component: <Main />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
];
