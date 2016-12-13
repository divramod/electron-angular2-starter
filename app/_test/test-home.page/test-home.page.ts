import { Component, ChangeDetectionStrategy } from '@angular/core'
import template from "./test-home.page.html"

@Component({
  selector: 'test-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class TestHomePage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
