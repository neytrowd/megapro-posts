import { createAsyncThunk } from '@reduxjs/toolkit';
import { getPosts } from '../../api';

export const loadPosts = createAsyncThunk('posts/loadPosts', async (params, thunkApi) => {
   try {
      return getPosts();
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
