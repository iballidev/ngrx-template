import { createReducer, on } from '@ngrx/store';
import todosActions from './todos.actions';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(initialState, 
    // on(todosActions.addTodo, (state, action)=> state.todos.push(action))
);
