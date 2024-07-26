import { createReducer, on } from '@ngrx/store';
import { PostsState } from './posts.state';
import postsActions from './posts.actions';

const initalState: PostsState = {
  posts: [],
  postDetails: null,
  isloading: false,
  error: null,
};
const _postsReducer = createReducer(
  initalState,

  /**LOAD POSTS */
  on(postsActions.loadPosts, (state) => {
    return {
      ...state,
      isloading: true,
    };
  }),
  on(postsActions.loadPostsSuccess, (state, action) => {
    return {
      ...state,
      posts: action.payload,
      isloading: false,
    };
  }),
  on(postsActions.loadPostsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isloading: false,
    };
  }),
  /** */
  /**LOAD POST DETAILS */
  on(postsActions.loadPostDetails, (state) => {
    return {
      ...state,
      isloading: true,
    };
  }),
  on(postsActions.loadPostDetailsSuccess, (state, action) => {
    return {
      ...state,
      postDetails: action.payload,
      isloading: false,
    };
  }),
  on(postsActions.loadPostDetailsFailure, (state, action) => {
    return {
      ...state,
      error: action.error,
      isloading: false,
    };
  }),
  /** */
  /**ADD POST */
  on(postsActions.addPost, (state, action) => {
    return {
      ...state,
      isloading: true,
    };
  }),
  on(postsActions.addPostSuccess, (state, action) => {
    return {
      ...state,
      isloading: false,
      posts: [...state.posts, action.post],
    };
  }),
  on(postsActions.addPostFailure, (state, action) => {
    return {
      ...state,
      isloading: false,
      error: action.error,
    };
  })
  /** */
);

export const postsReducer = (state: any, action: any) => {
  return _postsReducer(state, action);
};
