import { Injectable } from '@angular/core';
import { Item } from './confirmation-dialog.component';
import { listItems, editItem } from './counter.actions';
import { Store } from '@ngrx/store';

@Injectable({ providedIn: 'root' })
export class Service {
  serviceItems: Item[] = [
    { id: 0, name: 'hi' },
    { id: 1, name: 'bye' },
  ];

  constructor(private store: Store<{}>) {}

  getItems() {
    const response = this.serviceItems;
    this.store.dispatch(listItems({ response }));
    return response;
  }

  editItems(index: number, name: string) {
    this.serviceItems[index] = { ...this.serviceItems[index], name };
    this.store.dispatch(editItem({ id: index, newName: name }));
    return this.serviceItems;
  }
}
