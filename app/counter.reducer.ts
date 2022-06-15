import { ActionReducerMap, createReducer, on } from '@ngrx/store';
import { listItems, editItem, createItem } from './counter.actions';
import { Item } from './confirmation-dialog.component';

export const FEATURE_ID = 'counter';

export interface CounterState {
  items: ReadonlyArray<Item>;
}

export const initialState: CounterState = {
  items: [],
};

const _counterReducer = createReducer(
  initialState,
  on(listItems, (state, { response }) => ({ ...state, items: response })),
  on(editItem, (state, { id, newName }) => ({
    ...state,
    items: state.items.map((item) => {
      if (item.id !== id) {
        return item;
      }
      return {
        ...item,
        name: newName,
      };
    }),
  })),
  on(createItem, (state, { id, handle }) => ({
    ...state,
    items: state.items.map((item) => {
      if (item.id !== id) {
        return item;
      }
      const config = { handle };
      return { ...item, config };
    }),
  }))
);

export function reducer(state: CounterState, action) {
  return _counterReducer(state, action);
}

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
