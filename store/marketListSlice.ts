import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {MainList} from '../android/app/src/data/mainList';
import {MarketType} from '../android/app/src/types/market.type';

export interface SortingState {
  sortBy: string;
  mainList: any[];
}

const initialState: SortingState = {
  sortBy: 'price',
  mainList: MainList,
};

export const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSortBy(state, action: PayloadAction<string>) {
      state.sortBy = action.payload;
    },
    updateMainList(state, action: PayloadAction<MarketType[]>) {
      state.mainList = action.payload;
    },
  },
});

export const {setSortBy, updateMainList} = sortingSlice.actions;

export default sortingSlice.reducer;
