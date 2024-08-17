// walletSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import WalletApi from "../../Apis/WalletApi";

const initialState = {
  selectedWalletId: null,
  wallets: [],
  status: 'idle',
  selectedWallet: null
};

export const fetchWallets = createAsyncThunk('wallets/fetchWallets', async () => {
  const response = await WalletApi.getAll();
  return response.data;
});

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setSelectedWalletId: (state, action) => {
      state.selectedWalletId = action.payload;
    },
    setSelectedWallet: (state, action) => {
      state.selectedWallet = action.payload;
    },
  },   extraReducers: (builder) => {
  builder
      .addCase(fetchWallets.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWallets.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.wallets = action.payload;
      })
      .addCase(fetchWallets.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
  }
});

export const { setSelectedWalletId, setSelectedWallet } = walletSlice.actions;
export default walletSlice.reducer;