import { IS_PROD } from 'shared/libs/env';

export const PROTOCOL = 'https://';
export const HOST = 'norma.nomoreparties.space';
export const PORT = '';

export const API_VERSION = 'api';
export const API_URL = `${PROTOCOL}${HOST}${PORT}/${API_VERSION}`;

export const PREFIX = IS_PROD ? process.env.REACT_APP_PUBLIC_URL : '';
