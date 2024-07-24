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
      todos: [action.payload, ...state.todos],
    };
  }),
  on(todosActions.updateTodo, (state: any, action: any) => {
    let stateList = state.todos.map((item: any) => {
      if (item) {
        return item.id === action.todo.id
          ? { ...item, isDone: !item.isDone }
          : item;
      }
      return;
    });
    return {
      ...state,
      todos: stateList,
    };
  }),
  on(todosActions.removeTodo, (state: any, action: any) => {
    let newList = state.todos.filter((todo: any) => todo.id != action.id);
    return {
      ...state,
      todos: newList,
    };
  })
);

export default { todosReducer };
