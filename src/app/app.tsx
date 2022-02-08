import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { store } from 'app/store/store';
import { Router } from 'app/router';
import 'app/plugins/i18n/i18n';

import './styles/index.css';

export function App() {
  return (
    <StoreProvider store={store}>
      <DndProvider backend={HTML5Backend}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DndProvider>
    </StoreProvider>
  );
}
