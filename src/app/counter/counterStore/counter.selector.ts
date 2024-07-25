import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CounterState } from './counter.state';

// export interface AppState {
//   todos: TodoState;
// }

// export const selectFeature = (state: AppState) => state.todos;

export const getCounterState = createFeatureSelector<CounterState>('counter');

export const selectFeatureCounter = createSelector(
  // selectFeature,
  getCounterState,
  (state: CounterState) => state.counter
);
