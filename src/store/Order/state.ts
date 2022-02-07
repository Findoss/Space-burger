import type { initType } from './types';

export const initState: initType = {
  entity: {
    name: '',
    order: {
      number: '',
    },
    success: false,
  },
  status: 'pending',
};
