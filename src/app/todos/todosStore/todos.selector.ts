import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodoState } from './todos.reducer';

// export interface AppState {
//   todos: TodoState;
// }

// export const selectFeature = (state: AppState) => state.todos;

export const getTodoState = createFeatureSelector<TodoState>('todos');

export const selectFeatureTodos = createSelector(
  // selectFeature,
  getTodoState,
  (state: TodoState) => state.todos
);
