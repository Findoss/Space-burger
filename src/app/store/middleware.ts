import { unauthenticatedMiddleware } from './global/middleware/unauthenticated';
import { initSocketMiddleware } from './global/middleware/ws';

import { serviceMiddleware } from './services';
import { WsSlice } from 'entities/ws/model/slice';

// console.log(WsSlice.actions);

export const rootMiddleware = [
  unauthenticatedMiddleware,
  initSocketMiddleware(WsSlice.actions),
  ...serviceMiddleware,
];
