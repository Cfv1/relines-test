import {createSelector} from '@reduxjs/toolkit';

import {RootState} from 'src/store/store';

const selectState = (state: RootState) => state.usersReducer;

const selectAll = createSelector(
  selectState,
  (state) => ({
    users: state.users,
    ratedUsers: state.ratedUsers,
    communication: state.communication
}));

export const selectCommunication = createSelector(selectAll, state => state.communication);

export const selectUsers = createSelector(
  selectAll,
  (state) => state.users,
);

export const selectRatedUsers = createSelector(
  selectAll,
  (state) => state.ratedUsers
);
