import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import counterReducer from './counter/counterStore/counter.reducer';
import todosReducer from './todos/todosStore/todos.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({
      counter: counterReducer.counterReducer,
      todos: todosReducer.todosReducer,
    }),
  ],
};
