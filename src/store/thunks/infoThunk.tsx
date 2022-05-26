import { createAsyncThunk } from '@reduxjs/toolkit';
import { getComments, getPost, getUser } from '../../api';

interface ILoadInfoParams {
   id: string;
}

export const loadInfo = createAsyncThunk('posts/loadPost', async (params: ILoadInfoParams, thunkApi) => {
   try {
      const { id } = params;
      const post = await getPost(id);
      const user = await getUser(post.userId);
      const comments = await getComments(id);

      return {
         post,
         user,
         comments,
      };
   } catch (err) {
      return thunkApi.rejectWithValue('Something went wrong!');
   }
});
