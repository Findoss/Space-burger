import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProviderWrapper = (Story: any, context: any) => (
  <BrowserRouter>{Story(context)}</BrowserRouter>
);
