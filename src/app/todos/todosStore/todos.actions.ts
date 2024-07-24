import { createAction, props } from '@ngrx/store';

// const loadTodo = createAction('LOAD TODO LIST', props<{ todos: any[] }>());
const addTodo = createAction('ADD TODO', props<{ payload: any }>());
const updateTodo = createAction('UPDATE TODO', props<{ todo: any }>());
const removeTodo = createAction('REMOVE TODO', props<{ id: number }>());

export default {
  // loadTodo,
  addTodo,
  updateTodo,
  removeTodo,
};
