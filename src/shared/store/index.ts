'use client';
import contract from '@/shared/store/slice/contract';
import user from '@/shared/store/slice/user';
import { Contract, User } from '@/shared/types';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

export const reducer = combineReducers({
  contract,
  user,
});

export const createStore = () =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development',
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export type AppStore = ReturnType<typeof createStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];

export type StoreState = { contract: Contract; user: User };
