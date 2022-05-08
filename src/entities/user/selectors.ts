import { COLLECTIONS } from 'app/store/store';
import { COLLECTION_ORDER } from './slice';
import type { RootState } from 'app/store/store';

export const getUserCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_ORDER];

export const getEntityUser = (state: RootState) =>
  getUserCollection(state).entity;

export const selectUserStatus = (state: RootState) =>
  getUserCollection(state).status;
