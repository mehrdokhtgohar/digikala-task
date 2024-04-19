import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MainList} from '../android/app/src/data/mainList';
import {MarketType} from '../android/app/src/types/market.type';

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState: {sortBy: 'price'},
  reducers: {
    setSortBy(state, action) {
      state.sortBy = action.payload;
    },
  },
});
export const {setSortBy} = sortingSlice.actions;
