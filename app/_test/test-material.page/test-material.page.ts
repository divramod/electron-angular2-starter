import { Component, ChangeDetectionStrategy } from '@angular/core'
import template from "./test-material.page.html"

@Component({
  selector: 'test-material-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class TestMaterialPage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
