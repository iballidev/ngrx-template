import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

export const getPostsState = createFeatureSelector<PostsState>('posts');

export const selectFeaturePosts = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);
