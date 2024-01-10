import { configureStore } from "@reduxjs/toolkit";

import todoReducer from "./Slices/todoSlice";
// import SettingsReducer from "./Slices/SettingsReducer";

const store = configureStore({
  reducer: {
    todo: todoReducer,
    // settings: SettingsReducer,
  },
});

export default store;
