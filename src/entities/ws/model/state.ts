import { Orders } from './types';

export const initialStateSocket = {
  isConnect: false,
  isLoadingWs: true,
  success: false,
  orders: [] as Orders,
  total: null,
  totalToday: null,
  error: '',
};
