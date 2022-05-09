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
import { AppState } from './counter.reducer';

@Component({
  selector: 'material-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  parentItems: Item[] = [];

  constructor(private store: Store<{ AppState }>, service: Service) {
    console.log('in parent consturctor items from server are');
    this.parentItems = service.getItems();
    console.log(JSON.stringify(this.parentItems));
    // store
    //   .select(getItems)
    //   .pipe()
    //   .subscribe((items) => {
    //     console.log('got items from store');
    //     console.log(items);
    //   });
    this.store.pipe(select(getItems)).subscribe((items) => {
      console.log('got items from store');
      console.log(JSON.stringify(items));
    });
  }
}
