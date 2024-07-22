import { createAction, props } from '@ngrx/store';

const addTodo = createAction('ADD TODO', props<{ payload: any }>());
const removeTodo = createAction('REMOVE TODO', props<{ id: number }>());

export default {
  addTodo,
  removeTodo,
};
