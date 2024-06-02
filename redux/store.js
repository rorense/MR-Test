import cartReducer from "./cartReducer";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

// This JavaScript file is setting up a Redux store for a React application. Redux is a state management library, and this file is configuring how that state management will work.

// First, it imports cartReducer from a local file. A reducer in Redux is a function that determines changes to an application's state. It could use the action it receives to determine this change.

// Next, it imports configureStore from @reduxjs/toolkit, which is Redux's official, opinionated, batteries-included toolset for efficient Redux development. configureStore is a function that helps to configure your Redux store with good defaults.

// Then, it imports several items from redux-persist, a library that allows the Redux state to be stored in local storage so that it persists even when the page is refreshed. persistStore is a function that creates a persistor object, persistReducer is a function that will enhance a reducer to persist its data, and FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER are actions used by redux-persist internally.

// The storage import from redux-persist/lib/storage is the default storage engine using the browser's local storage.

// The persistConfig object is a configuration object for redux-persist. It specifies the key for the persisted reducer's state, the version of the reducer, and where to store the persisted state.

// The persistedReducer is created by calling persistReducer with the persistConfig and the cartReducer. This will enhance cartReducer to have its state persisted.

// The store is created by calling configureStore with an object that specifies the reducer and middleware. The reducer is set to the persistedReducer under the key cart. The middleware is configured to ignore certain actions during the serializable check, which is a part of Redux's default middleware that checks whether all actions and state are serializable.

// Finally, persistor is created by calling persistStore with the store. This persistor object is used to control the persisting and rehydrating process. Both store and persistor are exported for use in other parts of the application.

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
