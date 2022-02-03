import type { OrderRaw, Order } from './types';

export const formatOrder = ({ data }: OrderRaw): Order => {
  const formatted = { id: data._id };
  return formatted;
};
