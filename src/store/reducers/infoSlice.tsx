import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IPost from '../../types/post';
import IUser from '../../types/user';
import { loadInfo } from '../thunks/infoThunk';
import IComment from '../../types/comment';

interface InfoState {
   post: IPost | null;
   user: IUser | null;
   comments: IComment[];
   loading: boolean;
   error: string;
}

interface InfoPayload {
   post: IPost;
   user: IUser;
   comments: IComment[];
}

const initialState: InfoState = {
   post: null,
   user: null,
   comments: [],
   loading: false,
   error: '',
};

const infoSlice = createSlice({
   name: 'info',
   initialState,
   reducers: {},
   extraReducers: {
      [loadInfo.pending.type]: (state) => {
         state.loading = true;
      },
      [loadInfo.fulfilled.type]: (state, action: PayloadAction<InfoPayload>) => {
         state.post = action.payload.post;
         state.user = action.payload.user;
         state.comments = action.payload.comments;
         state.loading = false;
         state.error = '';
      },
      [loadInfo.rejected.type]: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.error = action.payload;
      },
   },
});

export default infoSlice.reducer;
