import type { IngredientId } from 'shared/api/ingredient/types';

export type OrderId = string;

export type OrderRaw = {
  data: {
    name: string;
    order: {
      number: OrderId;
    };
    success: boolean;
    message?: string;
  };
};

export type Order = {
  name: string;
  order: {
    number: OrderId;
  };
  success: boolean;
};

export type NewOrderParam = IngredientId[];
