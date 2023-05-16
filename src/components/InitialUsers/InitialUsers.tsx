import React, {memo, useEffect} from 'react';
import {Box} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import GroupsIcon from '@mui/icons-material/Groups';

import {fetchUsers} from 'src/store/services/user';
import UserCard from 'src/components/UserCard/UserCard';
import {BUTTONS_CONTAINER, ROOT_CONTAINER, USERS_CONTAINER} from './styles';
import {useAppSelector} from 'src/store/hooks/useAppSelector';
import {selectCommunication, selectUsers} from 'src/store/reducers/users/usersSelectors';
import {useAppDispatch} from 'src/store/hooks/useAppDispatch';
import {useActions} from 'src/store/hooks/useActions';
import Loading from 'src/components/common/Loading/Loading';
import ColorIconButton from 'src/components/common/Button/ColorIconButton';

const InitialUsers = () => {
  const users = useAppSelector(selectUsers);
  const communication = useAppSelector(selectCommunication);
  const dispatch = useAppDispatch();
  const {deleteUsers} = useActions();

  const getUsers = () => {
    dispatch(fetchUsers());
  }

  const refreshUsers = () => {
    deleteUsers();
    getUsers();
  }

  useEffect(() => {
    getUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={ROOT_CONTAINER}>
      {communication.isRequesting && <Loading />}
      <Box sx={BUTTONS_CONTAINER}>
        <ColorIconButton title="Обновить список пользователей" onClick={refreshUsers}>
          <RefreshIcon/>
        </ColorIconButton>
        <ColorIconButton title="Подгрузить пользователей" onClick={getUsers}>
          <GroupsIcon/>
        </ColorIconButton>
      </Box>

      <Box sx={USERS_CONTAINER}>
        {users?.map(user => (
          <UserCard key={user.uid} data={user} />
        ))}
      </Box>
    </Box>
  )
}

export default memo(InitialUsers);