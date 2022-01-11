import React from 'react';
import type { Routes } from './types';

const Qwer = () => <h1>werrewrewrewrew</h1>;

export const routes: Routes = [
  {
    path: 'qwer',
    component: <Qwer />,
    isPrivate: false,
    redirect: '',
    exact: false,
  },
];
