import storage from 'redux-persist/lib/storage';

export const persist = (key: string) => {
  return { key: key, storage: storage };
};
