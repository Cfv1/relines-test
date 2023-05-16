import {configureStore} from '@reduxjs/toolkit';
import UsersSlice from './reducers/users/usersSlice';

export const store = configureStore({
  reducer: {
    usersReducer: UsersSlice.reducer,
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;