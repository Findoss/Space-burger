import React from 'react';
import { BrowserRouter } from 'react-router-dom';

export const RouterProviderWrapper = (
  Story: React.FC,
  context: { children?: React.ReactNode },
) => <BrowserRouter>{Story(context)}</BrowserRouter>;
