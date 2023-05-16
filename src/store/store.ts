import {configureStore} from '@reduxjs/toolkit';
import UsersSlice from './reducers/users/usersSlice';
import {logger} from './helpers/logger';

export const store = configureStore({
  reducer: {
    usersReducer: UsersSlice.reducer,
  },
  middleware: (getDefault) => getDefault().concat(logger)
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;