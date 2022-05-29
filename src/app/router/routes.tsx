import type { Routes } from './types';

import {
  PageMain,
  PageTest,
  PageLogin,
  PageRegister,
  PageNotFound,
  PageResetPassword,
  PageForgotPassword,
  PageProfile,
} from 'pages';

export const routes: Routes = [
  {
    path: '/',
    component: <PageMain />,
    role: ['external'],
    redirect: '/',
  },
  {
    path: '/test',
    component: <PageTest />,
    role: ['external'],
    redirect: '/',
  },
  {
    path: '/login',
    component: <PageLogin />,
    role: ['external'],
    redirect: '/profile',
  },
  {
    path: '/register',
    component: <PageRegister />,
    role: ['external'],
    redirect: '/profile',
  },
  {
    path: '/forgot-password',
    component: <PageForgotPassword />,
    role: ['external'],
    redirect: 'profile',
  },
  {
    path: '/reset-password',
    component: <PageResetPassword />,
    role: ['external'],
    redirect: '/profile',
  },
  {
    path: '/profile',
    component: <PageProfile />,
    role: ['interior'],
    redirect: '/login',
  },
  {
    path: '*',
    component: <PageNotFound />,
    role: ['external', 'interior'],
    redirect: '/',
  },
];
