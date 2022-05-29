import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'shared/hooks/use-redux';
import { PREFIX } from 'shared/api/constants';
import { Auth } from '../auth';

import { selectRoleUser } from 'entities/user/model/selectors';

import { ProtectRoute } from 'features/protect-route';

import { routes } from './routes';

const routeComponents = () => {
  const roleUser = useSelector(selectRoleUser);

  return routes.map(({ path, component, role, redirect }, key) => (
    <Route
      key={key}
      path={`${PREFIX}${path}`}
      element={
        <ProtectRoute role={role} redirect={redirect} roleUser={roleUser}>
          {component}
        </ProtectRoute>
      }
    />
  ));
};

export const Router = () => {
  return (
    <Auth>
      <Routes>{routeComponents()}</Routes>
    </Auth>
  );
};
