import { RootState, COLLECTIONS } from 'store/store';
import { COLLECTION_ORDER } from './slice';

export const getOrderCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_ORDER];

export const selectIdOrder = (state: RootState) =>
  getOrderCollection(state).entity.order.number;

export const selectOrderStatus = (state: RootState) =>
  getOrderCollection(state).status;
