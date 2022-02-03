import { normalize } from 'normalizr';
import { API_URL } from 'constants/index';

import { instanceAxios } from 'plugins/axios';
import { formatOrder } from './format';

import type { Resolver } from '../types';
import type { Order, OrderRaw } from './types';

import mockOrder from './__mocks__/Order.json';

export const resolveOrder: Resolver<void, Order> = async () => {
  try {
    // const raw = mockOrder;
    const raw = await instanceAxios.get<void, OrderRaw>(
      `${API_URL}/ingredients`,
    );
    const formatted = formatOrder(raw);

    return formatted;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
