import { ActionReducerMap } from '@ngrx/store';
// import counterReducer from '../counter/counterStore/counter.reducer';
// import todosReducer from '../todos/todosStore/todos.reducer';
import { AppState } from './index.state';
import { counterReducer } from '../counter/counterStore/counter.reducer';
import { todosReducer } from '../todos/todosStore/todos.reducer';

export const appReducer: ActionReducerMap<AppState>= {
  counter: counterReducer,
  todos: todosReducer,
};
