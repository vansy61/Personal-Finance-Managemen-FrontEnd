// walletSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedWalletId: null,  // Khởi tạo ID của ví được chọn
};

const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setSelectedWalletId: (state, action) => {
      state.selectedWalletId = action.payload;
    },
  },
});

export const { setSelectedWalletId } = walletSlice.actions;
export default walletSlice.reducer;