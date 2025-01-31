import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from "./contacts/slice"
import filterReducer from './filters/slice';
import authReducer from './auth/slice'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER  } from 'redux-persist'

 
const persistConfig = {
  key: 'authData',
  whitelist: ['token'],
  storage,
}
 
const persistedReducer = persistReducer(persistConfig, authReducer)
 
export const store = configureStore({
  reducer: {
        contacts: contactsReducer,
        filter: filterReducer,
        auth: persistedReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
}),
});

export const persistor = persistStore (store);

