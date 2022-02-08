import { createAsyncThunk } from '@reduxjs/toolkit';
import { resolveNewOrder } from 'shared/api/order';

import type { NewOrderParam } from 'shared/api/order/types';

export const fetchNewOrder = createAsyncThunk(
  'order/fetchNewOrder',
  async (payload: NewOrderParam) => resolveNewOrder(payload),
);
