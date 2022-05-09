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

  constructor(private dialog: MatDialog) {
    console.log('in child consturctor myItems are ');
    console.log(this.itemList);
  }

  openDialog() {
    console.log('in opendialog myItems is ');
    console.log(JSON.stringify(this.itemList));
    const dialogRef = this.dialog.open(ConfirmationDialog, {});

    dialogRef.afterClosed().subscribe((confirmed: boolean) => {
      console.log('dialog is closed');
      console.log(JSON.stringify(this.myItems));
    });
  }
}
