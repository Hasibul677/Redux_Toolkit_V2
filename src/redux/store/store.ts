import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "../counter/CounterSlice";
import logger from "../middleware/logger";

const store = configureStore({
  reducer: {
    counter: CounterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
