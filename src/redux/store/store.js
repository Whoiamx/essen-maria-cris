import { configureStore, combineReducers } from "@reduxjs/toolkit";

import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import recommendedSlice from "../reducers/recommended/recommendedSlice";
import categoriesSlice from "./../reducers/categories/categoriesSlice";
import productsSlice from "../reducers/products/productsSlice";

//Combinamos todos los reducers(slices)
const reducers = combineReducers({
  recommended: recommendedSlice,
  categories: categoriesSlice,
  products: productsSlice,
});

//Se configura la persistencia del storage -- redux-persist
const persistConfig = {
  key: "root",
  storage,
  whiteList: [],
};

//Reducer que persiste el Storage -- redux-persist
const persistedReducer = persistReducer(persistConfig, reducers);

//Configuramos el store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
