import React from 'react';
import type { Routes } from './types';

import {
  PageMain,
  PageTest,
  PageLogin,
  PageRegister,
  PageNotFound,
} from 'pages';

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
    path: '/login',
    component: <PageLogin />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
  {
    path: '/register',
    component: <PageRegister />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
  {
    path: '/forgot-password ',
    component: <PageTest />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
  {
    path: '/reset-password',
    component: <PageTest />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
  {
    path: '/profile',
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
