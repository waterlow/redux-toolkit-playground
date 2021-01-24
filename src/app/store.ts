import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counter from '../features/counter/counterSlice';
import counterTwo from '../features/counter_two/counterTwoSlice';
import posts from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter,
    counterTwo,
    posts
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
