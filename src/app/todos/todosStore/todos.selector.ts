import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TodosState } from './todos.state';

export const getTodosState = createFeatureSelector<TodosState>('todos');

export const selectFeatureTodos = createSelector(
  getTodosState,
  (state: TodosState) => state.todos
);
