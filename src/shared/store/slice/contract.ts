import { Contract } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Contract = {
  name: '',
  text: '',
};

const slice = createSlice({
  name: 'contract',
  initialState: initialState,
  reducers: {
    initializeContract: (state) => {
      state.name = initialState.name;
      state.text = initialState.text;
    },
    updateContract: (state: Contract, action: PayloadAction<{ data: Contract }>) => {
      const payload = action.payload.data;
      state.name = payload.name;
      state.text = payload.text;
    },
  },
});

export const { initializeContract, updateContract } = slice.actions;

export default slice.reducer;
