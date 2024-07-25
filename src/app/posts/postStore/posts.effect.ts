import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, exhaustMap, catchError, mergeMap } from 'rxjs/operators';
import { PostService } from '../../services/post.service';
import postsActions from './posts.actions';
import { Router } from '@angular/router';

@Injectable()
export class PostsEffects {
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postsActions.loadPosts),
      exhaustMap(() => {
        return this.postSvc.getPosts().pipe(
          map((posts) => {
            return postsActions.loadPostsSuccess({ payload: posts });
          }),

          catchError(() => EMPTY)
        );
      })
    );
  });
  loadPostDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postsActions.loadPostDetails),
      exhaustMap((action: any) => {
        return this.postSvc.getPostDetails(action.id).pipe(
          map((response) => {
            console.warn('response: ', response);
            return postsActions.loadPostDetailsSuccess({ payload: response });
          }),

          catchError(() => EMPTY)
        );
      })
    );
  });

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(postsActions.addPost),
      exhaustMap((action: any) => {
        return this.postSvc.sendPost(action.post).pipe(
          map((posts) => {
            const payload = {
              ...action.post,
              id: new Date().getTime().toString(),
            };
            this.router.navigate(['/posts']);
            return postsActions.addPostSuccess({ post: payload });
          }),

          catchError(() => EMPTY)
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private postSvc: PostService,
    private router: Router
  ) {}
}
