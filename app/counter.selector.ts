import { AppState } from './counter.reducer';
import { createSelector } from '@ngrx/store';

export const selectCounterState = (state: AppState) => state.counter;

export const getItems = createSelector(
  selectCounterState,
  (state) => state.items
);
