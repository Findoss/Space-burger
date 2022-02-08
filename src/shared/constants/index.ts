export const IS_DEV = process.env.NODE_ENV === 'development';
export const IS_PROD = process.env.NODE_ENV === 'production';

export const PREFIX = IS_PROD ? process.env.REACT_APP_PUBLIC_URL : '';

export const PROTOCOL = 'https://';
export const HOST = 'norma.nomoreparties.space';
export const PORT = '';

export const API_VERSION = 'api';
export const API_URL = `${PROTOCOL}${HOST}${PORT}/${API_VERSION}`;
