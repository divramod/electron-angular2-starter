import { Component, ChangeDetectionStrategy } from '@angular/core'
import template from "./ducks-home.page.html"

@Component({
  selector: 'ducks-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class DucksHomePage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
