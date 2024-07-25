import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostsState } from '../postStore/posts.state';
import { Store } from '@ngrx/store';
import postsActions from '../postStore/posts.actions';
import { Observable } from 'rxjs';
import { selectFeaturePosts } from '../postStore/posts.selector';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  posts!: any[];
  posts$!: Observable<any>;
  constructor(private store: Store<PostsState>) {}

  ngOnInit(): void {
    this.store.dispatch(postsActions.loadPosts());
    this.posts$ = this.store.select(selectFeaturePosts);
  }
}
