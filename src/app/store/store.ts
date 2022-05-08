import { configureStore } from '@reduxjs/toolkit';

import { persistStore } from 'redux-persist';

import { rootMiddleware } from './middleware';
import { rootReducer, combinedReducer } from './reducer';

import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }).concat(rootMiddleware),
    ...options,
  });

export const store = createStore();
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
export { WIDGETS, COLLECTIONS } from './constants';
