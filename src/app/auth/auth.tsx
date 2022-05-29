import React, { useEffect } from 'react';
import { useDispatch } from 'shared/hooks/use-redux';
import { fetchUser } from 'entities/user/model/thunk';

import type { Props } from './types';
export const Auth = ({ children }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  return <>{children}</>;
};
