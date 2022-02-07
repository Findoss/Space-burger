import React from 'react';
import type { Routes } from './types';

import { PageMain, PageTest, PageNotFound } from 'pages';

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
  {
    path: '*',
    component: <PageNotFound />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
];
