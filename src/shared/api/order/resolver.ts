import { API_URL } from 'shared/api/constants';

import { instanceAxios } from 'shared/api/axios';
import { formatOrder } from './format';

import type { Resolver } from '../types';
import type { Order, OrderRaw, NewOrderParam } from './types';

import mockOrder from './__mocks__/Order.json';

export const resolveNewOrder: Resolver<NewOrderParam, Order> = (payload) => {
  return instanceAxios
    .post<void, OrderRaw>(`${API_URL}/orders`, {
      ingredients: payload,
    })
    .then((data) => {
      if (data.data.success === false) {
        throw new Error('');
      }
      return data;
    })
    .then((data) => formatOrder(data));
};
