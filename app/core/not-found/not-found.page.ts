import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'bc-not-found-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    not found
  `,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class NotFoundPage { }
