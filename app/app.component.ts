import { Component, Inject } from '@angular/core';
import {
  VERSION,
  MatDialogRef,
  MatDialog,
  MatSnackBar,
  MAT_DIALOG_DATA,
} from '@angular/material';
import { ConfirmationDialog, Item } from './confirmation-dialog.component';
import { Service } from './test.service';
import { getItems } from './counter.selector';
import { Store, select } from '@ngrx/store';
import { listItems, editItem } from './counter.actions';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  parentItems: Item[] = [];

  constructor(
    private readonly store: Store<{}>,
    private readonly service: Service
  ) {
    console.log('in parent consturctor');
    this.getParentItems();

    this.store.pipe(select(getItems)).subscribe((items) => {
      console.log('got items from store:');
      console.log(JSON.stringify(items));
      this.parentItems = items;
    });
  }

  private getParentItems() {
    const response = this.service.getItems();
    this.store.dispatch(listItems({ response }));
  }
}
