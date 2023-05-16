import {useMemo} from 'react';
import {bindActionCreators} from '@reduxjs/toolkit';

import UsersSlice from '../reducers/users/usersSlice';
import {useAppDispatch} from './useAppDispatch';

const actions = {
  ...UsersSlice.actions,
};

export const useActions = () => {
  const dispatch = useAppDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
