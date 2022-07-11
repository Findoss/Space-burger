import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'app/store/store';
import { wsSlice } from 'entities/ws/model';

import { getEntityUser } from 'entities/user/model/selectors';

export const initSocketMiddleware = (wsUrl: string) => {
  const socketMiddleware: Middleware<RootState> = (store) => {
    let socket: null | WebSocket = null;

    return (next) => {
      return (action): any => {
        const { dispatch } = store;
        const { type } = action;
        const state = store.getState();
        const token = getEntityUser(state).accessToken;

        if (type === 'socket/connectionFeedList') {
          socket = new WebSocket(`${wsUrl}/all`);
        }

        if (type === 'socket/connectionOrderList') {
          socket = new WebSocket(`${wsUrl}?token=${token}`);
        }

        if (socket) {
          const { actions } = wsSlice;

          socket.onopen = () => {
            dispatch(actions.onOpen());
          };

          socket.onerror = () => {
            dispatch(actions.onError());
          };

          socket.onmessage = (event) => {
            const { data } = event;
            const parseData = JSON.parse(data);
            dispatch(actions.getMessage(parseData));
          };

          socket.onclose = () => {
            dispatch(actions.onClose());
          };

          if (type === 'socket/wsClose') {
            socket.close();
          }
        }

        next(action);
      };
    };
  };
  return socketMiddleware;
};
