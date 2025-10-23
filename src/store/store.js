import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer, questionsReducer, registerReducer } from "../reducers/reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducer = combineReducers({
  user: authReducer,
  register: registerReducer,
  questions: questionsReducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);

export default () => {
  return { store, persistor };
};
