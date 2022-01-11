import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { resolveIngredients } from '../api/Ingredients/index';

import { Router } from 'router';

import './App.css';

resolveIngredients().then((data) => console.log(data));

export function App() {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
}
