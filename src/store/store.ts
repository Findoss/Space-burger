import { configureStore } from '@reduxjs/toolkit';

import { rootMiddleware } from './middleware';
import { rootReducer, combinedReducer } from './reducer';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(rootMiddleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof combinedReducer>;
