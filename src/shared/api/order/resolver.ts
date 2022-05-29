import { API_URL } from 'shared/api/constants';

import { httpClient } from 'shared/api/axios';

import type { Resolver } from '../types';
import type { Order, OrderRaw, NewOrderParam } from './types';

import mockOrder from './__mocks__/Order.json';

export const resolveNewOrder: Resolver<NewOrderParam, Order> = (payload) => {
  return httpClient
    .post<void, OrderRaw>(`${API_URL}/orders`, {
      ingredients: payload,
    })
    .then(({ data }) => {
      if (data.success === false) {
        throw new Error('');
      }
      return data;
    })
    .catch((err) => {
      throw new Error(err.response.data.message);
    });
};
