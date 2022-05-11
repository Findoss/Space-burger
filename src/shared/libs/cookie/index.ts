import Cookies from 'js-cookie';

export const setTokenAuth = (token: string) => {
  Cookies.set('authorization', token);
};

export const removeTokenAuth = () => {
  Cookies.remove('authorization');
};
