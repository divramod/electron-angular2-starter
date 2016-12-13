import { Component, ChangeDetectionStrategy } from '@angular/core'
import template from "./test.page.html"

@Component({
  selector: 'test-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class TestPage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
