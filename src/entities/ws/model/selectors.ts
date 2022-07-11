import { createSelector } from '@reduxjs/toolkit';
import { RootState, COLLECTIONS } from 'app/store/store';
import {
  selectIngredientById,
  getEntityIngredients,
} from 'entities/ingredient/model/selectors';
import { COLLECTION_WS } from './slice';

import { Orders } from './types';

export const getWSCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_WS];

export const getFeedOrders = (state: RootState) => {
  const orders: Orders = getWSCollection(state).orders;

  const arr = orders.map((order) => {
    let data = { ...order };

    const images = order.ingredients.map((idIngredient) => {
      return selectIngredientById(idIngredient)(state).imageMobile;
    });

    const sum = order.ingredients.reduce((acc, idIngredient) => {
      return (acc += selectIngredientById(idIngredient)(state).price);
    }, 0);

    data.images = images;
    data.sum = sum;

    return data;
  }, []);

  return arr;
};

export const getFeedOrderNumbers = (status: string) => (state: RootState) => {
  const orders: Orders = getWSCollection(state).orders;

  return orders.filter((order) => order.status === status).length;
};
