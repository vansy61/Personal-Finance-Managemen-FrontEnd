import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  token: localStorage.getItem('token') || null,
  status: 'idle',
  error: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
});

export default authSlice.reducer;