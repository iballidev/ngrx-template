import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import counterReducer from './counter/counterStore/counter.reducer';
import todosReducer from './todos/todosStore/todos.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore({
        counter: counterReducer.counterReducer,
        todos: todosReducer.todosReducer,
    }),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })
],
};
