import {configureStore} from '@reduxjs/toolkit';
import {sortingSlice, SortingState} from './marketListSlice';

export const store = configureStore({
  reducer: {sorting: sortingSlice.reducer},
});
export type RootState = {sorting: SortingState};
