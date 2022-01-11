import type { ReactNode } from 'react';

export type Route = {
  path: string;
  component: ReactNode;
  isPrivate: boolean;
  redirect: string;
  exact: false;
};

export type Routes = Route[];
