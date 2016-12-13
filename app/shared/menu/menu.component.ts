import { Component, ChangeDetectionStrategy } from '@angular/core'
import { RouterModule, RouterLink } from '@angular/router'
import {MdDialog, MdDialogRef, MdSnackBar, MdToolbar} from '@angular/material';

import template from "./menu.component.html"

@Component({
  selector: 'dm-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styleUrls: [ './app/shared/menu/menu.component.css' ]
})
export class MenuComponent {

  constructor(private _dialog: MdDialog, private _snackbar: MdSnackBar) {
    // Update the value for the progress-bar on an interval.
  }
}
