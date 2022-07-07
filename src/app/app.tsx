import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider as StoreProvider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from 'app/store/store';
import { Router } from 'app/router';
import { Auth } from 'app/auth';
import 'app/plugins/i18n/i18n';

import './styles/index.css';

export function App() {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <DndProvider backend={HTML5Backend}>
          <Auth>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </Auth>
        </DndProvider>
      </PersistGate>
    </StoreProvider>
  );
}
