import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PREFIX } from 'shared/api/constants';

import { routes } from './routes';

const routeComponents = routes.map(({ path, component }, key) => (
  <Route path={`${PREFIX}${path}`} element={component} key={key} />
));

export const Router = () => {
  return <Routes>{routeComponents}</Routes>;
};
