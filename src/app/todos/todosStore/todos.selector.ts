import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

// export interface AppState {
//   todos: TodoState;
// }

// export const selectFeature = (state: AppState) => state.todos;

export const getTodosState = createFeatureSelector<TodosState>('todos');

export const selectFeatureTodos = createSelector(
  // selectFeature,
  getTodosState,
  (state: TodosState) => state.todos
);
