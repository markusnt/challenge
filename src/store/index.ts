import { configureStore } from '@reduxjs/toolkit';
import { investmentSlice } from './investment/slice';

export const store = configureStore({
  reducer: {
    investment: investmentSlice.reducer,
  },
});
