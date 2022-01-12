import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProviderWrapper = (Story: any, context: any) => {
  return <BrowserRouter>{Story(context)}</BrowserRouter>;
};
