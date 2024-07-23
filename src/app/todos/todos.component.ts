import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TodoListComponent, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent {
}
