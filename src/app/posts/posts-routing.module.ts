import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts.component';
import { AddPostComponent } from './add-post/add-post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { provideEffects } from '@ngrx/effects';
import { PostsEffects } from './postStore/posts.effect';
// import { provideStore } from '@ngrx/store';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
    // providers: [
    //   provideEffects(PostsEffects)
    // ],
    children: [
      {
        path: '',
        component: PostListComponent,
      },
      {
        path: 'list',
        component: PostListComponent,
      },
      {
        path: 'new',
        component: AddPostComponent,
      },
      {
        path: ':postId',
        component: PostDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsRoutingModule {}
