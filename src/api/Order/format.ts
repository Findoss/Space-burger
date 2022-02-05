import type { OrderRaw, Order } from './types';

export const formatOrder = ({ data }: OrderRaw): Order => {
  return data;
};
