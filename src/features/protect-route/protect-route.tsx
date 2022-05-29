import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';

import type { Props } from './types';

export const ProtectRoute = memo(
  ({ role, children, redirect, roleUser }: Props) => {
    const navigate = useNavigate();

    useEffect(() => {
      console.log(roleUser, role);

      if (!role.includes(roleUser)) {
        console.log('fetchLogin.rejected');
        navigate(redirect, { replace: true });
      }
    }, [roleUser, role]);

    return <>{children}</>;
  },
);
