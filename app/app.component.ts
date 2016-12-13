import { Component } from '@angular/core'
import {MdDialog, MdDialogRef, MdSnackBar, MdToolbar} from '@angular/material';

import appTemplate from './app.component.html'

@Component({
  selector: 'dm-app',
  template: appTemplate,
  styleUrls: [ './app/app.component.css' ]
})
export class AppComponent {

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
  }

}

