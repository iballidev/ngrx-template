import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { AddTodoComponent } from './add-todo/add-todo.component';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [RouterOutlet, CommonModule, AddTodoComponent],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss',
})
export class TodosComponent implements OnInit {
  todos$!: Observable<any>;
  constructor(private store: Store<{ todos: [] }>) {}

  ngOnInit(): void {
    this.todos$ = this.store.select('todos');
  }

  
  // ngOnInit(): void {
  //   this.todos$ = this.store
  //     .select('todos')
  //     .pipe(
  //       map((obj) =>
  //         Object.keys(obj).map((key: any) => ({ key, value: obj[key] }))
  //       )
  //     );
  // }

}
