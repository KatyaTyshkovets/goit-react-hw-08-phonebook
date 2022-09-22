import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

import authReducer from './Auth/Auth-slice';
import contactsReducer from './Contacts/Contacts-slice';
import filterReducer from './Contacts/Filter-slice';

const persistConfig = {
    key: "token",
    storage,
    whitelist: ["token"]
}

const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: persistedReducer,
        contacts: contactsReducer,
        filter: filterReducer,

    },
    middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        },
    }),
})

export const persistor = persistStore(store);