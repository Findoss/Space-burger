import { RootState, COLLECTIONS } from 'app/store/store';
import { COLLECTION_USER } from './slice';

export const getUserCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_USER];

export const getEntityUser = (state: RootState) =>
  getUserCollection(state).entity;

export const selectUserStatus = (state: RootState) =>
  getUserCollection(state).status;
