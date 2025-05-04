import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./appSlice";
import toggleReducer from "./toggleSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    toggles: toggleReducer,
  },
});

export default store;
