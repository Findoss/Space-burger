import { unauthenticatedMiddleware } from './global/middleware/unauthenticatedMiddleware';
import { ingredientApi } from 'api/Ingredients/api';

export const rootMiddleware = [
  unauthenticatedMiddleware,
  ingredientApi.middleware,
];
