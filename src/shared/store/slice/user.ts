import { User } from '@/shared/types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: User = {
  id: '',
  fullname: '',
};

const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    initializeAlice: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = '1';
      state.fullname = 'Alice Cooper';
    },
    initializeBob: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.id = '2';
      state.fullname = 'Bob McCartney';
    },
  },
});

export const { initializeAlice, initializeBob } = slice.actions;

export default slice.reducer;
