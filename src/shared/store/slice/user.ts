import { User } from '@/shared/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: User = {
  id: '',
  fullname: '',
};

const slice = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    resetUser: (state: User) => {
      state.id = initialState.id;
      state.fullname = initialState.fullname;
    },
    updateUser: (state: User, action: PayloadAction<{ data: User }>) => {
      const payload = action.payload.data;
      state.id = payload.id;
      state.fullname = payload.fullname;
    },
  },
});

export const { updateUser, resetUser } = slice.actions;

export default slice.reducer;
