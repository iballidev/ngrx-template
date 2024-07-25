import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PostsState } from './posts.state';

/**fetches the whole state */
export const getPostsState = createFeatureSelector<PostsState>('posts');

/**fetches the posts slice from the state */
export const selectFeaturePosts = createSelector(
  getPostsState,
  (state: PostsState) => state.posts
);

/**fetches the posts slice from the state */
export const selectFeaturePostDetails = createSelector(
  getPostsState,
  (state: PostsState) => state.postDetails
);
