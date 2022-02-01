import { uuid } from 'utils/uuid';
import type { initType } from './types';

export const initState: initType = {
  order: {
    modalIsOpen: false,
    ingredients: [
      { id: '60d3b41abdacab0026a733c6', key: uuid() },
      //
      { id: '60d3b41abdacab0026a733d0', key: uuid() },
      { id: '60d3b41abdacab0026a733d0', key: uuid() },
      { id: '60d3b41abdacab0026a733d1', key: uuid() },
      { id: '60d3b41abdacab0026a733d1', key: uuid() },
      { id: '60d3b41abdacab0026a733d2', key: uuid() },
      { id: '60d3b41abdacab0026a733d2', key: uuid() },
    ],
  },
};
