import { CounterState, FEATURE_ID } from './counter.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

//export const selectCounterState = (state: AppState) => state.counter;
export const counterState = createFeatureSelector<CounterState>(FEATURE_ID);

export const getAllItems = createSelector(counterState, (state) => state.items);

export const getItems = createSelector(getAllItems, (items) =>
  items?.filter((item) => item.name)
);
