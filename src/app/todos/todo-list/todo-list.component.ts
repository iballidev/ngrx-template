import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import todosActions from '../todosStore/todos.actions';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<any>;
  constructor(private store: Store<{ todos: [] }>) {}
  ngOnInit(): void {
    this.todos$ = this.store.select('todos');
  }

  doTodo(todo: any) {
    this.store.dispatch(todosActions.updateTodo({ todo }));
  }

  removeTodo(id: number) {
    console.log("id: ", id)
    this.store.dispatch(todosActions.removeTodo({ id }));
  }
}
