import storage from 'redux-persist/lib/storage';
import { COLLECTIONS } from './store';

import { COLLECTION_USER } from 'entities/user/model/slice';

console.log(`${COLLECTIONS}/${COLLECTION_USER}`);

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: [`${COLLECTIONS}/${COLLECTION_USER}`],
};
