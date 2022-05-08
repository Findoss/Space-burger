import type { initType } from './types';

export const initState: initType = {
  entity: {
    success: false,
    user: {
      email: '',
      name: '',
    },
    accessToken: '',
    refreshToken: '',
  },
  status: 'pending',
};
