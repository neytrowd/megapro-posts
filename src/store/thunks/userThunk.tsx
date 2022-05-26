import { createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../../api';

export const loadUsers = createAsyncThunk('posts/loadPosts', async (params, thunkApi) => {
   try {
      return getUsers();
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
