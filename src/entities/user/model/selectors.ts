import { RootState, COLLECTIONS } from 'app/store/store';
import { COLLECTION_USER } from './slice';

import { Role } from './types';

export const getUserCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_USER];

export const getEntityUser = (state: RootState) =>
  getUserCollection(state).entity;

export const selectUserStatus = (state: RootState) =>
  getUserCollection(state).status;

export const selectUserError = (state: RootState) =>
  getUserCollection(state).errorMessage;

export const selectRoleUser = (state: RootState): Role => {
  return getEntityUser(state).user.name ? 'interior' : 'external';
};
