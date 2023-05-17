import {createSlice, PayloadAction} from '@reduxjs/toolkit';

import {fetchUsers} from 'src/store/services/user';
import {IUser} from 'src/models/IUser';
import {ICommunication} from 'src/models/common/ICommunication';
import {Outcome} from 'src/models/Outcome';

interface IUserState {
  users: IUser[];
  ratedUsers: IUser[]
  communication: ICommunication;
}

const initialState: IUserState = {
  users: [],
  ratedUsers: [],
  communication: {
    isRequesting: false,
    isSuccess: false
  },
}

const UsersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    enableRateMode: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      const foundUser = state.users.find(user => user.uid === data);
      if(foundUser) {
        state.users = state.users.filter(user => user.uid !== foundUser.uid)
        state.ratedUsers.push(foundUser);
      }
    },

    enableShowMode: (state, action: PayloadAction<string>) => {
      const data = action.payload;
      const foundUser = state.ratedUsers.find(user => user.uid === data);
      if(foundUser) {
        state.ratedUsers = state.ratedUsers.filter(user => user.uid !== foundUser.uid)
        state.users.push(foundUser);
      }
    },

    increaseRating: (state, action: PayloadAction<string>) => {
      const foundUser = state.ratedUsers.find(user => user.uid === action.payload);
      foundUser && foundUser.rating++;
    },

    decreaseRating: (state, action: PayloadAction<string>) => {
      const foundUser = state.ratedUsers.find(user => user.uid === action.payload);
      foundUser && foundUser.rating--;
    },

    resetRating: (state, action: PayloadAction<string>) => {
      const foundUser = state.ratedUsers.find(user => user.uid === action.payload);
      foundUser && (foundUser.rating = 0);
    },

    setOutcome: (state, action: PayloadAction<{uid: string, outcome: Outcome}>) => {
      const data = action.payload;
      const foundUser = state.ratedUsers.find(user => user.uid === data.uid);
      foundUser && (foundUser.lastOutcome = data.outcome);
    },

    deleteUsers: (state) => {
      state.users = [];
      state.ratedUsers = [];
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.communication.isRequesting = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUser[]>) => {
      state.users = state.users.concat(action.payload);
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
