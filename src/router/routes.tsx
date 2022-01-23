import React from 'react';
import type { Routes } from './types';

import { PageMain } from 'pages/Main';

export const routes: Routes = [
  {
    path: '/',
    component: <PageMain />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
];
