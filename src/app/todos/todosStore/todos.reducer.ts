import { createReducer, on } from '@ngrx/store';
import todosActions from './todos.actions';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(
  initialState,
  // on(todosActions.loadTodo, (state: any) => state),
  on(todosActions.addTodo, (state: any, action: any) => {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  })
);

export default { todosReducer };
