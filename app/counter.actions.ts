import { createAction, props } from '@ngrx/store';
import { Item } from './confirmation-dialog.component';

export const listItems = createAction(
  '[Component] list items',
  props<{ response: Item[] }>()
);

export const editItem = createAction(
  '[Component] edit item',
  props<{ id: number; newName: string }>()
);

/*
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://github.com/ngrx/platform
*/
