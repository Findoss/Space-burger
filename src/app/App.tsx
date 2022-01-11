import React from 'react';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { resolveIngredients } from '../api/Ingredients/index';

import { Router } from 'router';
import 'plugins/i18n/i18n';

import './App.css';

resolveIngredients().then((data) => console.log(data));

export function App() {
  return (
    <Suspense fallback="...">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
}
