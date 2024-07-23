import { createReducer, on } from '@ngrx/store';
import todosActions from './todos.actions';

const initialState = {
  todos: [],
};

const todosReducer = createReducer(
  initialState,
  // on(todosActions.loadTodo, (state: any) => state),,
  on(todosActions.addTodo, (state: any, action: any) => {
    return {
      ...state,
      todos: [...state.todos, action.payload],
    };
  }),
  on(todosActions.updateTodo, (state: any, action: any) => {
    let isExist = state.todos.indexOf(action.todo);
    console.log('isExist: ', isExist);
    if (isExist) {
    }
    let newList = state.todos.filter(
      (_item: any) => _item.id != action.todo.id
    );
    console.log('newList: ', newList);

    let updatedList = [...newList, { ...action.todo, isDone: true }];

    // let newList = state.todos.filter((todo: any) => todo.id != action.id);
    return {
      ...state,
      todos: updatedList,
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
