import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { FullscreenProgress } from 'components/FullscreenProgress';

import { Router } from 'router';
import 'plugins/i18n/i18n';
import { persistor, store } from 'store/store';

export function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<FullscreenProgress />} persistor={persistor}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}
