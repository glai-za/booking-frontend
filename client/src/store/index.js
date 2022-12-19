import { createSlice, configureStore } from '@reduxjs/toolkit';

const slice = createSlice({
  name: 'auth',
  initialState: { loggedIn: false },
  reducers: {
    login(state) {
      state.loggedIn = true;
    },
    logout(state) {
      state.loggedIn = false;
    },
  },
});

export const authActions = slice.actions;

export const store = configureStore({ reducer: slice.reducer });
