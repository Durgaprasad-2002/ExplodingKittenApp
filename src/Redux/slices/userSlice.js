// slices/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  const userData = JSON.parse(localStorage.getItem("user")) || null;
  const token = localStorage.getItem("token") || null;
  return {
    userData,
    token,
    isUserLogged: !!token,
  };
};

const initialState = getInitialState();

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.userData = action.payload.userData;
      state.token = action.payload.token;
      state.isUserLogged = !!action.payload.token;

      // Save user data and token to local storage
      localStorage.setItem("userData", JSON.stringify(state.userData));
      localStorage.setItem("token", state.token);
    },
    logout(state) {
      state.userData = null;
      state.token = null;
      state.isUserLogged = false;

      // Clear user data and token from local storage
      localStorage.removeItem("userData");
      localStorage.removeItem("token");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
