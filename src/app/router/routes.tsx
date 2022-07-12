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
  PageIngredient,
  PageFeed,
  PageProfileOrders,
} from 'pages';

export const routes: Routes = [
  {
    path: '/',
    component: <PageMain />,
    role: [],
  },
  {
    path: '/ingredients/:id',
    component: <PageIngredient />,
    role: [],
  },
  {
    path: '/test',
    component: <PageTest />,
    role: ['external'],
  },
  {
    path: '/login',
    component: <PageLogin />,
    role: ['external'],
  },
  {
    path: '/register',
    component: <PageRegister />,
    role: ['external'],
  },
  {
    path: '/forgot-password',
    component: <PageForgotPassword />,
    role: ['external'],
  },
  {
    path: '/reset-password',
    component: <PageResetPassword />,
    role: ['external'],
  },
  {
    path: '/profile',
    component: <PageProfile />,
    role: ['interior'],
  },
  {
    path: '/profile/orders',
    component: <PageProfileOrders />,
    role: ['interior'],
  },
  {
    path: '/feed',
    component: <PageFeed />,
    role: [],
  },
  {
    path: '*',
    component: <PageNotFound />,
    role: [],
  },
];
