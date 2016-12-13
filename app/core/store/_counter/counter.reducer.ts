import '@ngrx/core/add/operator/select';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/let';
import { Observable } from 'rxjs/Observable';
import * as counter from './counter.actions';
import { Counter, initialCounter } from './counter.model';

export function reducer(state = initialCounter, action: counter.Actions): Counter {
  switch (action.type) {
    case counter.ActionTypes.INCREMENT_COUNTER:
      console.log(state.value);
      return {value: state.value + 1};
    case counter.ActionTypes.DECREMENT_COUNTER:
      console.log(state.value);
      return {value: state.value - 1};
    default:
      return state;
  }
}

export function getValue(state$: Observable<Counter>) {
  return state$.select(state => state.value);
}
