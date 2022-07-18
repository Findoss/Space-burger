import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { getUserCollection } from 'entities/user/model/selectors';
import { resolveNewOrder } from 'shared/api/order';

import type { NewOrderParam } from 'shared/api/order/types';

export const fetchNewOrder = createAsyncThunk(
  'order/fetchNewOrder',

  async (payload: NewOrderParam, { getState }) => {
    const state = getState() as RootState;
    const { accessToken } = getUserCollection(state).entity;
    const payloadPlus = {
      authorization: accessToken,
      ingredients: payload.ingredients,
    };
    return await resolveNewOrder(payloadPlus);
  },
);
