import { configureStore } from '@reduxjs/toolkit';

import { rootMiddleware } from './middlewares';
import { rootReducer, combinedReducer } from './reducer';

import type { ConfigureStoreOptions } from '@reduxjs/toolkit';

export const createStore = (
  options?: ConfigureStoreOptions['preloadedState'] | undefined,
) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rootMiddleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
