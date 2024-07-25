import { CounterState } from "../counter/counterStore/counter.state";
import { PostsState } from "../posts/postStore/posts.state";
import { TodosState } from "../todos/todosStore/todos.state";


export interface AppState {
  counter: CounterState;
  todos: TodosState;
  posts: PostsState
}
