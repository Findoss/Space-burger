import { unauthenticatedMiddleware } from './global/middleware/unauthenticated';
import { initSocketMiddleware } from './global/middleware/ws';

import { serviceMiddleware } from './services';

import { WS_URL } from 'shared/api/constants';

export const rootMiddleware = [
  unauthenticatedMiddleware,
  initSocketMiddleware(`${WS_URL}/orders`),
  ...serviceMiddleware,
];
