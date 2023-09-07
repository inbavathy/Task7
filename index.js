import React from 'react';
import App from "./App";
import store from "./store/store";
import {provider} from "react-redux";
import {persistGate} from "redux-persist/integrated/react";
import{
    persiststore,
}from 'redux-persist';
const root=ReactDom.createRoot(document.grtElementById("root"));
root render(
    <React.StrictMode>
        <provider store={store}>
            <persistGate loading={null} persistor={persiststore(store)}>
                <App/>
            </persistGate>
        </provider>
    </React.StrictMode>
);