import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';

import type { Props } from './types';

export const ProtectRoute = ({ role, children, redirect, roleUser }: Props) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!role.includes(roleUser)) {
      navigate(redirect, { replace: true });
    }
  }, [roleUser, role]);

  return <>{children}</>;
};
