import React from 'react';

import { resolveIngredients } from '../api/Ingredients/index';

resolveIngredients().then((data) => console.log(data));

import './App.css';

export function App() {
  return <div className="App">asd</div>;
}
