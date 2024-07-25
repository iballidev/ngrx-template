import { createAction, props } from '@ngrx/store';

/**LOAD POSTS */
const loadPosts = createAction('[Posts Page] LOAD POSTS');
const loadPostsSuccess = createAction(
  '[Posts Page] LOAD POSTS SUCCESS',
  props<{ payload: any }>()
);
const loadPostsFailure = createAction(
  '[Posts Page] LOAD POSTS FAILURE',
  props<{ error: any }>()
);
/** */

/**LOAD POST DETAILS */
const loadPostDetails = createAction(
  '[Post Details Page] LOAD POST DETAILS',
  props<{ id: any }>()
);
const loadPostDetailsSuccess = createAction(
  '[Post Details Page] LOAD POST DETAILS SUCCESS',
  props<{ payload: any }>()
);
const loadPostDetailsFailure = createAction(
  '[Post Details Page] LOAD POST DETAILS FAILURE',
  props<{ error: any }>()
);

/**ADD POST */
const addPost = createAction(
  '[Add Post Page] ADD POST',
  props<{ post: any }>()
);
const addPostSuccess = createAction(
  '[Add Post Page Success] ADD POST SUCCESS',
  props<{ post: any }>()
);
const addPostFailure = createAction(
  '[Add Post Page Failure] ADD POST FAILURE',
  props<{ error: any }>()
);

export default {
  loadPosts,
  loadPostsSuccess,
  loadPostsFailure,
  loadPostDetails,
  loadPostDetailsSuccess,
  loadPostDetailsFailure,
  addPost,
  addPostSuccess,
  addPostFailure,
};
