import type { ReactNode } from 'react';
import type { Role } from 'entities/user/model/types';

export type Props = {
  children?: ReactNode;
  role: Role[];
  roleUser: Role;
  redirect: string;
};
