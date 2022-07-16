import { createSelector } from '@reduxjs/toolkit';
import { RootState, COLLECTIONS } from 'app/store/store';
import {
  selectIngredientById,
  getEntityIngredients,
} from 'entities/ingredient/model/selectors';
import { COLLECTION_WS } from './slice';

import { Order, Orders, UniIngredient } from './types';

export const getWSCollection = (state: RootState) =>
  state[COLLECTIONS][COLLECTION_WS];

export const getFeedOrders = (state: RootState) => {
  const { orders } = getWSCollection(state);

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

  return orders
    .filter((order) => order.status === status)
    .map((order) => order.number);
};

export const getFeedTotal = (state: RootState) => getWSCollection(state).total;

export const getFeedTotalToday = (state: RootState) =>
  getWSCollection(state).totalToday;

export const getOrder =
  (orderId: string) =>
  (state: RootState): Order | null => {
    const { orders } = getWSCollection(state);
    console.log(orders);

    const rawOrder = orders.find((order) => order._id === orderId);

    if (rawOrder === undefined) {
      return null;
    }

    const order: Order = { ...rawOrder };

    const ingredientsDetail = order.ingredients.map((idIngredient) => {
      return selectIngredientById(idIngredient)(state);
    });

    const uniIngredientsDetail: UniIngredient[] = [];
    ingredientsDetail.forEach((ingredient) => {
      const i = uniIngredientsDetail.findIndex((v) => {
        return v.id === ingredient.id;
      });

      if (i > -1) {
        uniIngredientsDetail[i].price += ingredient.price;
        uniIngredientsDetail[i].count += 1;
      } else {
        uniIngredientsDetail.push({ ...ingredient, count: 1 });
      }

      return uniIngredientsDetail;
    });

    const sum = order.ingredients.reduce((acc, idIngredient) => {
      return (acc += selectIngredientById(idIngredient)(state).price);
    }, 0);

    order.ingredientsDetail = uniIngredientsDetail;
    order.sum = sum;

    console.log(order);

    return order;
  };
