import type { Middleware, MiddlewareAPI } from 'redux';
import { ACTIONS_WS, COLLECTION_WS } from 'entities/ws/model/slice';

export const initSocketMiddleware =
  (wsActions: any): Middleware =>
  (store: MiddlewareAPI) => {
    let socket: WebSocket | null = null;

    return (next) => (action) => {
      const { dispatch } = store;
      const { type, payload } = action;

      if (type === `${COLLECTION_WS}/${ACTIONS_WS.WS_CONNECTION_START}`) {
        socket = new WebSocket(payload);
      }

      if (
        type === `${COLLECTION_WS}/${ACTIONS_WS.WS_CONNECTION_STOP}` &&
        socket !== null
      ) {
        if (socket.OPEN) {
          socket.close();
        }
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch(wsActions.onOpen(event));
        };

        socket.onerror = (event) => {
          dispatch(wsActions.onError(event));
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const { success, ...raw } = JSON.parse(data);

          if (success) {
            dispatch(wsActions.getMessage(raw));
          }
        };

        socket.onclose = (event) => {
          dispatch(wsActions.close(event));
        };

        if (type === `${COLLECTION_WS}/${ACTIONS_WS.WS_SEND_MESSAGE}`) {
          socket.send(JSON.stringify(payload));
        }
      }

      next(action);
    };
  };
