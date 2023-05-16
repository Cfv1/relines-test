import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchUsers} from 'src/store/services/user';
import {IUser} from 'src/models/IUser';
import {ICommunication} from 'src/models/common/ICommunication';

interface IUserState {
  users: IUser[];
  communication: ICommunication;
}

const initialState: IUserState = {
  users: [],
  communication: {
    isRequesting: false,
    isSuccess: false
  },
}

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.communication.isRequesting = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.users.concat(action.payload);
      state.communication.isRequesting = false;
      state.communication.isSuccess = true;
    });
    builder.addCase(fetchUsers.rejected, (state, action: PayloadAction<unknown>) => {
      state.communication.isRequesting = false;
      state.communication.isSuccess = false;
      typeof action.payload === 'string' && (state.communication.error = action.payload);
    });
  }
});

export default UsersSlice;
