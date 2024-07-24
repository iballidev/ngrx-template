import { createReducer, on } from '@ngrx/store';
import counterActions from './counter.actions';

const initialState = {
  counter: 0,
};

const counterReducer = createReducer(
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
      counter: state.counter - 1,
    };
  }),
  on(counterActions.reset, (state) => {
    return {
      ...state,
      counter: 0,
    };
  })
);

export default { counterReducer };
