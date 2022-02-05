import { createAsyncThunk } from '@reduxjs/toolkit';
import { resolveNewOrder } from 'api/Order';

import type { NewOrderParam } from 'api/Order/types';

export const fetchNewOrder = createAsyncThunk(
  'order/fetchNewOrder',
  async (payload: NewOrderParam) => resolveNewOrder(payload),
);
