import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../../app/store';
import PostsJson from './posts.json'

type Posts = typeof PostsJson;

interface State {
  posts: Posts;
}

const initialState: State = {
  posts: [],
};

export const slice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<Posts>) => {
      state.posts = action.payload;
    },
  },
});

const { setPosts } = slice.actions;

export const fetchPosts = (): AppThunk => (
  async dispatch => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Posts = await res.json();
    dispatch(setPosts(data))
  }
);

export const selectPosts = (state: RootState) => state.posts.posts;

export default slice.reducer;
