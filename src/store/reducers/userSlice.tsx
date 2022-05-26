import IUser from '../../types/user';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadUsers } from '../thunks/userThunk';

interface UserState {
   users: IUser[];
   loading: boolean;
   error: string;
}

const initialState: UserState = {
   users: [],
   loading: false,
   error: '',
};

const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {},
   extraReducers: {
      [loadUsers.pending.type]: (state) => {
         state.loading = true;
      },
      [loadUsers.fulfilled.type]: (state, action: PayloadAction<IUser[]>) => {
         state.users = action.payload;
         state.loading = false;
         state.error = '';
      },
      [loadUsers.rejected.type]: (state, action: PayloadAction<string>) => {
         state.loading = false;
         state.error = action.payload;
      },
   },
});

export default userSlice.reducer;
