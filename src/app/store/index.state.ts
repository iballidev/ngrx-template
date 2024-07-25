import { CounterState } from "../counter/counterStore/counter.state";
import { TodosState } from "../todos/todosStore/todos.state";


export interface AppState {
  counter: CounterState;
  todos: TodosState;
}
