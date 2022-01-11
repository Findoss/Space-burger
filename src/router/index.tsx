import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { routes } from './routes';

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={path} element={component} key={key} />
));

export const Router = () => {
  return (
    <Routes>
      {routeComponents}
      <Route path="*" element={<h1>404</h1>} />
    </Routes>
  );
};
