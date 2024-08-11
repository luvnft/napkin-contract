import { Contract } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Contract = {
  text: '',
  dateCreated: '',
  id: '',
  signees: [],
};

const slice = createSlice({
  name: 'contract',
  initialState: initialState,
  reducers: {
    initializeContract: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.text = initialState.text;
      state.dateCreated = new Date().toISOString();
      state.id = initialState.id;
      state.signees = [];
    },
    updateContract: (state: Contract, action: PayloadAction<{ data: Contract }>) => {
      const payload = action.payload.data;

      state.text = payload.text;
      state.dateCreated = payload.dateCreated;
      state.id = payload.id;
      state.signees = payload.signees;
    },
  },
});

export const { initializeContract, updateContract } = slice.actions;

export default slice.reducer;
