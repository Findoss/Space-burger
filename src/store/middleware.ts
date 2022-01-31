import { unauthenticatedMiddleware } from './global/middleware/unauthenticatedMiddleware';
import { serviceMiddleware } from './services';

export const rootMiddleware = [unauthenticatedMiddleware, ...serviceMiddleware];
