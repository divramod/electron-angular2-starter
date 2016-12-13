// ========================== [ 3rd ] ==========================
import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

// ========================== [ template ] ==========================
import template from "./test-ngrx.page.html"

// ========================== [ store test ] ==========================
import * as counter from '../../core/store/_counter/counter.actions';
import { Counter } from '../../core/store/_counter/counter.model';
import * as fromRoot from '../../core/store/index';


@Component({
  selector: 'test-ngrx-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: template,
  styles: [`
    :host {
      text-align: center;
    }
  `]
})
export class TestNgrxPage {
  value$: Observable<number>;

  constructor(private store: Store<fromRoot.RootState>) {
    this.value$ = store.let(fromRoot.getCounterValue);
    console.log(this.value$);
  }

  increment() {
    this.store.dispatch(new counter.IncrementCounterAction());
  }

  decrement() {
    this.store.dispatch(new counter.DecrementCounterAction());
  }
}
