import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    logout: (state) => {
      localStorage.removeItem('token');
      state.token = null;
      state.user = null;
    }
  }
});

export const {setToken, logout} = authSlice.actions;

export default authSlice.reducer;