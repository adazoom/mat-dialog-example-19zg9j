import {
  Component,
  Inject,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { listenToElementOutputs } from '@angular/core/src/view/element';
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ConfirmationDialog, Item } from './confirmation-dialog.component';
import { createItem } from './counter.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'child-component',
  templateUrl: 'child.component.html',
})
export class ChildComponent {
  @Input()
  get itemList() {
    return this.myItems;
  }
  set itemList(list: undefined | Item[]) {
    console.log('in child setter received items are');
    console.log(JSON.stringify(list));
    if (!list) {
      return;
    }
    this.myItems = list;
  }
  myItems: Item[] = [];

  constructor(private dialog: MatDialog, private store: Store<{}>) {
    console.log('in child consturctor myItems are ');
    console.log(this.itemList);
  }

  openDialog(item: Item) {
    console.log('in opendialog item is ');
    console.log(JSON.stringify(item));

    let handle = item.config?.handle;
    if (!handle) {
      const newHandle = 'handle123';
      this.store.dispatch(createItem({ id: item.id, handle: newHandle }));
      item = { ...item, config: { handle: 'handle8989' } };
    }

    const dialogRef = this.dialog.open(ConfirmationDialog, {});

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      console.log('dialog is closed, item is ');
      console.log(JSON.stringify(item));
      console.log('dialog is closed, myItems are');
      console.log(JSON.stringify(this.myItems));
    });
  }
}
