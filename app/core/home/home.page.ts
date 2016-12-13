import { Component, ChangeDetectionStrategy } from '@angular/core'
import { MdCard, MdCardTitle } from '@angular/material'
import template from "./home.page.html"

@Component({
  selector: 'home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class HomePage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
