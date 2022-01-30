import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchIngredientAll } from './thunk';
import { selectIngredientStatus, getEntityIngredients } from './selectors';

export function useGetIngredientQuery() {
  const dispatch = useDispatch();

  const status = useSelector(selectIngredientStatus);
  const data = useSelector(getEntityIngredients);

  useEffect(() => {
    dispatch(fetchIngredientAll());
  }, [dispatch]);

  const isUninitialized = status === undefined;
  const isLoading = status === 'pending' || status === undefined;
  const isError = status === 'rejected';
  const isSuccess = status === 'fulfilled';

  return { data, isUninitialized, isLoading, isError, isSuccess };
}
