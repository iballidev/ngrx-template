import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import todosActions from '../todosStore/todos.actions';
import { TodosState } from '../todosStore/todos.state';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrl: './add-todo.component.scss',
})
export class AddTodoComponent {
  todo!: string;
  errorMsg!: string;

  constructor(private store: Store<TodosState>) {}

  onSubmit() {
    const payload = {
      id: new Date().getTime().toString(),
      todo: this.todo,
      isDone: false,
    };
    if (this.todo) {
      this.store.dispatch(todosActions.addTodo({ payload: payload }));
      this.todo = '';
    } else {
      this.errorMsg = 'Todo cannot be empty';
    }
  }
}
