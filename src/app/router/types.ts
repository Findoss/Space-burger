import type { ReactNode } from 'react';
import type { Role } from 'entities/user/model/types';

export type Route = {
  path: string;
  component: ReactNode;
  role: Role[];
  redirect: string;
};

export type Routes = Route[];
