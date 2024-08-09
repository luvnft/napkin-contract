import { Contract } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Contract = {
  text: `Hey Bob,

I, Alice, promise to bring you two bottles of Budweiser every day for 20 days, starting from 20th August 2024. I’ll drop them off at your place each day.

– Alice`,
  dateCreated: '',
  id: '1',
  signees: [],
};

const slice = createSlice({
  name: 'contract',
  initialState: initialState,
  reducers: {
    initialize: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.text = initialState.text;
      state.dateCreated = new Date().toISOString();
      state.id = '1';
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

export const { initialize, updateContract } = slice.actions;

export default slice.reducer;
