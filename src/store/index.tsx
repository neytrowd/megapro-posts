import { combineReducers, configureStore } from '@reduxjs/toolkit';
import postSlice from './reducers/postSlice';
import infoSlice from './reducers/infoSlice';
import userSlice from './reducers/userSlice';

const rootReducer = combineReducers({
   posts: postSlice,
   info: infoSlice,
   users: userSlice,
});

export const store = configureStore({
   reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
