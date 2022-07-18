import React, { memo, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router-dom';
import { hasUrl } from 'shared/api/constants';

import type { Props } from './types';

const PROTECT_ROUTE_REDIRECT = '/login';
const PROTECT_ROUTE_PROFILE = '/';

export const ProtectRoute = memo(({ role, children, roleUser }: Props) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (role.length) {
      if (!role.includes(roleUser)) {
        if (roleUser === 'external') {
          navigate(PROTECT_ROUTE_REDIRECT);
        }

        if (roleUser === 'interior') {
          if (hasUrl(pathname, '/login')) {
            navigate(-1);
            return;
          }
          navigate(PROTECT_ROUTE_PROFILE);
        }
      }
    }
  }, [roleUser, role, pathname]);

  return <>{children}</>;
});
