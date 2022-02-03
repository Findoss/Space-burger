import type { IngredientId } from 'api/Ingredient/types';

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
