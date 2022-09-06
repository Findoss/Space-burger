import { store } from 'app/store/store';
import { resetStateAction } from 'app/store/global/actions/resetState';

import {
  burgerConstructorSlice,
  toggleModalOrder,
  addBunOrder,
  addIngredientOrder,
  swapIngredientOrder,
  removeIngredientOrder,
  resetOrder,
} from '../slice';

import { initState } from '../state';

import {
  selectIsModalOpen,
  selectOrderIngredients,
  selectSumOrder,
} from '../selectors';

export const { reducer } = burgerConstructorSlice;

describe('burger constructor constructor', () => {
  beforeEach(() => {
    store.dispatch(resetStateAction);
  });

  it('select selectIsModalOpen', () => {
    const state = store.getState();
    const result = selectIsModalOpen(state);
    expect(result).toBeFalsy();
  });

  it('select selectOrderIngredients', () => {
    const state = store.getState();
    const result = selectOrderIngredients(state);
    expect(result).toEqual([]);
  });

  it('select selectSumOrder', () => {
    const state = store.getState();
    const result = selectIsModalOpen(state);
    expect(result).toBeFalsy();
  });

  it('select selectSumOrder', () => {
    const state = store.getState();
    const result = selectSumOrder(state);
    expect(result).toBe(0);
  });

  it('reduce toggleModalOrder', () => {
    const state = reducer(undefined, toggleModalOrder());
    expect(state.modalIsOpen).toBeTruthy();
  });

  it('reduce addBunOrder', () => {
    const state = reducer(undefined, addBunOrder({ id: '12345678' }));
    expect(state.order.bun).toEqual('12345678');
  });

  it('reduce addIngredientOrder', () => {
    const state = reducer(undefined, addIngredientOrder({ id: '12345678' }));
    expect(state.order.ingredients[0].id).toEqual('12345678');
  });

  it('reduce swapIngredientOrder', () => {
    const init = {
      modalIsOpen: false,
      order: {
        bun: null,
        ingredients: [
          {
            key: '2JsnPtI3xOwTmVBUnWJaT',
            id: '0001',
          },
          {
            key: '7qsYXtOBF6V0WI2nL7XHY',
            id: '0002',
          },
        ],
      },
    };

    const state = reducer(
      init,
      swapIngredientOrder({ dragIndex: 0, hoverIndex: 1 }),
    );

    expect(state.order.ingredients[0].id).toEqual('0002');
  });

  it('reduce swapIngredientOrder', () => {
    const init = {
      modalIsOpen: false,
      order: {
        bun: null,
        ingredients: [
          {
            key: '2JsnPtI3xOwTmVBUnWJaT',
            id: '0001',
          },
        ],
      },
    };

    const state = reducer(init, removeIngredientOrder('0001'));

    expect(state.order.ingredients).toEqual([]);
  });

  it('reduce swapIngredientOrder', () => {
    const init = {
      modalIsOpen: false,
      order: {
        bun: null,
        ingredients: [
          {
            key: '2JsnPtI3xOwTmVBUnWJaT',
            id: '0001',
          },
        ],
      },
    };

    const state = reducer(init, resetOrder());

    expect(state).toEqual(initState);
  });
});
