import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: "light",
  scout: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.scout = action.payload.scout;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.scout = null;
      state.token = null;
    },
  },
});

export const { setMode, setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
