import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.userReducer;

export const selectCurrent = createSelector(
  selectState,
  (state) => ({
    currentUser: state.currentUser,
    communication: state.communication
  }));

export const selectCommunication = createSelector(selectCurrent, state => state.communication);
