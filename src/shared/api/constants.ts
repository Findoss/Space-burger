import { IS_PROD } from 'shared/libs/env';

export const PROTOCOL = 'https://';
export const HOST = 'norma.nomoreparties.space';
export const PORT = '';

export const API_VERSION = 'api';
export const API_URL = `${PROTOCOL}${HOST}${PORT}/${API_VERSION}`;

export const PUBLIC_PREFIX = IS_PROD ? process.env.REACT_APP_PUBLIC_URL : '';
export const url = (url: string) => `${PUBLIC_PREFIX}${url}`;
export const hasUrl = (currentUrl: string, url: string) =>
  currentUrl.replace(PUBLIC_PREFIX ?? '', '') === url;

export const WS_PROTOCOL = 'wss://';
export const WS_HOST = HOST;
export const WS_PORT = '';

export const WS_URL = `${WS_PROTOCOL}${WS_HOST}${WS_PORT}`;
