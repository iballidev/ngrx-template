import { createAction } from '@ngrx/store';

const increment = createAction('INCREASE COUNTER');
const decrement = createAction('DECREASE COUNTER');
const reset = createAction('RESET COUNTER');

export default {
  increment,
  decrement,
  reset,
};
