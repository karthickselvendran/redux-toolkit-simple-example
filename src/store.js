import { configureStore } from "@reduxjs/toolkit";
import userlistReducer from "./slices/userlistSlice";

export const store = configureStore({
  devtools: true,
  reducer: {
    userslist: userlistReducer,
  },
});
