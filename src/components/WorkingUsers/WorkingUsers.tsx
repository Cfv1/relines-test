import React, {memo} from 'react';
import {Box} from '@mui/material';

import UserCard from 'src/components/UserCard/UserCard';
import {useAppSelector} from 'src/store/hooks/useAppSelector';
import {selectRatedUsers} from 'src/store/reducers/users/usersSelectors';
import {ROOT_CONTAINER} from './styles';
import {UserMode} from 'src/models/UserMode';

const WorkingUsers = () => {
  const users = useAppSelector(selectRatedUsers);

  return (
    <Box sx={ROOT_CONTAINER}>
      {users?.map(user => (
        <UserCard key={user.uid} data={user} mode={UserMode.RATE} />
      ))}
    </Box>
  )
}

export default memo(WorkingUsers);