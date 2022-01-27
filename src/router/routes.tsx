import React from 'react';
import type { Routes } from './types';

import { PageMain } from 'pages/Main';
import { PageTest } from 'pages/Test';

export const routes: Routes = [
  {
    path: '/',
    component: <PageMain />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
  {
    path: '/test',
    component: <PageTest />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
];
