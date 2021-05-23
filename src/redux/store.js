import { combineReducers, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "./userReducer";
import categoriesReducer from "./categoriesReducer";
import cartReducer from "./cartReducer";
import prevRouteReducer from "./prevRouteReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
  prevRoute: prevRouteReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor = persistStore(store);
