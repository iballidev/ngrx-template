import { createReducer, on } from '@ngrx/store';
import counterActions from './counter.actions';

const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(counterActions.increment, (state) => state + 1),
  on(counterActions.decrement, (state) => state + 1),
  on(counterActions.reset, (state) => 0)
);

export default { counterReducer };
