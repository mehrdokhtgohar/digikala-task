import {configureStore} from '@reduxjs/toolkit';
import {sortingSlice} from './marketListSclice';

export const store = configureStore({
  reducer: {sorting: sortingSlice.reducer},
});
