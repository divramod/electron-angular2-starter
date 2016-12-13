import { Component, ChangeDetectionStrategy } from '@angular/core'
import ducksListPageTemplate from "./ducks-list.page.html"

@Component({
  selector: 'duck-list-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: ducksListPageTemplate,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class DucksListPage {
  constructor() {
    // Update the value for the progress-bar on an interval.
  }
}
