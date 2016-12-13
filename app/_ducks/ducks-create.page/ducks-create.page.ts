import { Component, ChangeDetectionStrategy } from '@angular/core'
import ducksCreatePageTemplate from "./ducks-create.page.html"

@Component({
  selector: 'ducks-create-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ducksCreatePageTemplate,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class DucksCreatePage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
