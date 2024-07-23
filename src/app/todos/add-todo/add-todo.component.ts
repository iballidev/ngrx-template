import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import todosActions from '../todosStore/todos.actions';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  todo!: string;

  constructor(private store: Store<{ todo: any }>) {}

  onSubmit() {
    const payload = {
      id: new Date().getTime().toString(),
      todo: this.todo,
      isDone: false,
    };
    console.log('payload: ', payload);
    this.store.dispatch(todosActions.addTodo({ payload: payload }));
    this.todo = '';
  }
}
