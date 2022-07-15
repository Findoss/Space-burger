import { Ingredient } from 'shared/api/ingredient/types';

export type wsActionsType = {
  WS_CONNECTION_SUCCESS: string;
  WS_CONNECTION_ERROR: string;
  WS_CONNECTION_CLOSED: string;
  WS_GET_MESSAGE: string;
  WS_SEND_MESSAGE: string;
  WS_CONNECTION_START: string;
  WS_CONNECTION_STOP: string;
};

export type UniIngredient = { count: number } & Ingredient;

export type Order = {
  ingredients: string[];
  _id: string;
  createdAt: string;
  status: string;
  isOrderPage: string;
  name: string;
  number: number;
  sum?: number;
  images?: string[];
  ingredientsDetail?: UniIngredient[];
};

export type Orders = Order[];
