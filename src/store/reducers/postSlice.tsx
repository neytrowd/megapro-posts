import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPost from '../../types/post';
import { loadPosts } from '../thunks/postThunk';

interface PostState {
   posts: IPost[];
   loading: boolean;
   error: string;
}

const initialState: PostState = {
   posts: [],
   loading: false,
   error: '',
};

const postSlice = createSlice({
   name: 'post',
   initialState,
   reducers: {},
   extraReducers: {
      [loadPosts.pending.type]: (state) => {
         state.loading = true;
      },
      [loadPosts.fulfilled.type]: (state, action: PayloadAction<IPost[]>) => {
         state.posts = action.payload;
         state.loading = false;
         state.error = '';
      },
      [loadPosts.rejected.type]: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.error = action.payload;
      },
   },
});

export default postSlice.reducer;
