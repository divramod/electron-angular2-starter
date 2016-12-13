import { Component, ChangeDetectionStrategy } from '@angular/core'
import ducksPageTemplate from "./ducks.page.html"

@Component({
  selector: 'duck-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ducksPageTemplate,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class DucksPage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
