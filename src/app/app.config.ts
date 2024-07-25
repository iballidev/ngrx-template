import { ApplicationConfig, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
// import counterReducer from './counter/counterStore/counter.reducer';
// import todosReducer from './todos/todosStore/todos.reducer';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { appReducer } from './store/index.reducer';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './posts/postStore/posts.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideStore(appReducer),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }),
    provideEffects(PostsEffects)
],
};
