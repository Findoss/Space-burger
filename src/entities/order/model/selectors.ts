import { RootState, COLLECTIONS } from 'app/store/store';
import { COLLECTION_ORDER } from './slice';

export const getOrderCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_ORDER];

export const selectIdOrder = (state: RootState) =>
  getOrderCollection(state).entity.order.number || 0;

export const selectOrderStatus = (state: RootState) =>
  getOrderCollection(state).status;
