import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../../services/post.service';
import { Store } from '@ngrx/store';
import { PostsState } from '../postStore/posts.state';
import postsActions from '../postStore/posts.actions';
import { Observable } from 'rxjs';
import { getPostsState } from '../postStore/posts.selector';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './post-details.component.html',
  styleUrl: './post-details.component.scss',
})
export class PostDetailsComponent implements OnInit {
  post$!: Observable<any>;
  constructor(
    private route: ActivatedRoute,
    private store: Store<PostsState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((param: any) => {
      let postId = param.postId;
      this.getPostDetails(postId);
    });
  }

  getPostDetails(id: string) {
    this.store.dispatch(postsActions.loadPostDetails({ id }));
    this.post$ = this.store.select(getPostsState);
  }
}
