import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIngredientAll } from './thunk';
import { selectIngredientStatus, selectIngredients } from './selectors';

import type { RootState } from 'store/store';

export function useGetIngredientQuery() {
  const dispatch = useDispatch();

  const status = useSelector((state: RootState) =>
    selectIngredientStatus(state),
  );

  const data = useSelector((state: RootState) => selectIngredients(state));

  useEffect(() => {
    dispatch(fetchIngredientAll());
  }, [dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  return { data, isUninitialized, isLoading, isError, isSuccess };
}
