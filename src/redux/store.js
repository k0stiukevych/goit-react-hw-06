import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";

import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

const contactsPersistConfig = {
    key: 'contacts',
    storage,
    whitelist: ["items"],
}

const persistedContactsReducer = persistReducer(contactsPersistConfig, contactsReducer)

export const store = configureStore({
    reducer: {
        contacts: persistedContactsReducer,
        filter: filtersReducer,
    }
});

export const persistor = persistStore(store);



