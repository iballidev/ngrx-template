import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import todosActions from '../todosStore/todos.actions';
import { getTodosState } from '../todosStore/todos.selector';
import { TodosState } from '../todosStore/todos.state';
// import { selectFeature } from '../todosStore/todos.selector';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<any>;
  constructor(private store: Store<TodosState>) {}
  ngOnInit(): void {
    this.todos$ = this.store.select(getTodosState);
    // this.todos$ = this.store.select(selectFeature);
  }

  doTodo(todo: any) {
    this.store.dispatch(todosActions.updateTodo({ todo }));
  }

  removeTodo(id: number) {
    this.store.dispatch(todosActions.removeTodo({ id }));
  }
}
