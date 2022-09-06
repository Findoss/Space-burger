import { store } from 'app/store/store';
import { resetStateAction } from 'app/store/global/actions/resetState';

import { initState } from '../state';

import { burgerIngredientsSlice } from '../slice';
import { setActualType, setActualIngredient, resetActualType } from '../slice';
import { IngredientsType } from 'shared/enums/ingredient';

export const { reducer } = burgerIngredientsSlice;

describe('burger constructor constructor', () => {
  beforeEach(() => {
    store.dispatch(resetStateAction);
  });

  it('reduce swapIngredientOrder', () => {
    const state = reducer(undefined, setActualType(IngredientsType.bells));
    expect(state.list.actual).toEqual(IngredientsType.bells);
  });

  it('reduce swapIngredientOrder', () => {
    const state = reducer(undefined, setActualIngredient('12341234'));
    expect(state.ingredient.actual).toEqual('12341234');
  });
});
