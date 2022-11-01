import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userInitialState } from './initialState';
import { Item } from './interfaces/IInvestment';

export const investmentSlice = createSlice({
  name: 'investment',
  initialState: userInitialState,
  reducers: {
    investmentSetValue(state, action: PayloadAction<any>) {
      let index = state.resgate.findIndex((i: Item) => i.id === action.payload.id);

      if (index > -1) {
        state.resgate[index] = action.payload;
      }
      if (index === -1) {
        state.resgate = [...state.resgate, action.payload];
      }
    },
    investmentClear(state) {
      state.resgate = userInitialState.resgate;
    },
  },
});
