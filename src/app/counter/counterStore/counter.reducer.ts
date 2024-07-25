import { createReducer, on } from '@ngrx/store';
import counterActions from './counter.actions';
import { CounterState } from './counter.state';


const initialState: CounterState = {
  counter: 0,
};

const _counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(counterActions.decrement, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(counterActions.reset, (state) => initialState)
);

export function counterReducer(state: any, action: any) {
  return _counterReducer(state, action);
}
