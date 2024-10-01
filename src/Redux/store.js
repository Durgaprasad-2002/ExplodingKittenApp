// store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Redux/slices/userSlice";
import gameReducer from "../Redux/slices/gameSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
  },
});
