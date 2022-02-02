import { uuid } from 'utils/uuid';
import type { initType } from './types';

export const initState: initType = {
  order: {
    modalIsOpen: false,
    bun: null,
    // bun: '60d3b41abdacab0026a733c6',
    ingredients: [
      // { id: '60d3b41abdacab0026a733d0', key: 'uuid()2' },
      // { id: '60d3b41abdacab0026a733d1', key: 'uuid()3' },
      // { id: '60d3b41abdacab0026a733d2', key: 'uuid()4' },
      // { id: '60d3b41abdacab0026a733d3', key: 'uuid()111' },
      //
      // { id: '60d3b41abdacab0026a733d0', key: uuid() },
      // { id: '60d3b41abdacab0026a733d1', key: uuid() },
      // { id: '60d3b41abdacab0026a733d2', key: uuid() },
    ],
  },
};
