import {configure store} from "@reduxjs/toolkit";
import{
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authreducer from "./Authslice.js"
const persistConfig={key:"root",storage,version:1};
const persistedReducer=persistReducer(persistConfig,authreducer);
export default configurestore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializablecheck:{
            ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
        };
    });
});
