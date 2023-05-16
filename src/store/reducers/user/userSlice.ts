import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchUser} from 'src/store/services/user';
import {IUser} from 'src/models/IUser';
import {ICommunication} from 'src/models/common/ICommunication';

interface IUserState {
  currentUser: IUser | null;
  communication: ICommunication;
}

const initialState: IUserState = {
  currentUser: null,
  communication: {
    isRequesting: false,
    isSuccess: false
  },
}

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.communication.isRequesting = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<IUser>) => {
      state.currentUser = action.payload;
      state.communication.isRequesting = false;
      state.communication.isSuccess = true;
    });
    builder.addCase(fetchUser.rejected, (state, action: PayloadAction<unknown>) => {
      state.communication.isRequesting = false;
      state.communication.isSuccess = false;
      typeof action.payload === 'string' && (state.communication.error = action.payload);
    });
  }
});

export default UserSlice;
