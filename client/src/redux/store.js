import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import app from 'redux/slices/app';
import user from 'redux/slices/user';
import post from 'redux/slices/post';

const rootReducer = combineReducers({
  app,
  user,
  post,
});

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
};

const persistedRootReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedRootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: {
      ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
