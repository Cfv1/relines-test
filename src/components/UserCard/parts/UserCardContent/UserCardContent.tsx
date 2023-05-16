import React, { memo } from 'react';
import {CardContent, Typography} from '@mui/material';

import {IUser} from 'src/models/IUser';

interface IUserCardContent {
  user: IUser;
}

const UserCardContent = (props: IUserCardContent) => {
  const {user} = props;

  return (
    <CardContent>
      <Typography component="div" variant="h5" align="center">
        {`${user.first_name} ${user.last_name}`}
      </Typography>
      <Typography component="div" variant="subtitle2" align="center">
        {user.gender}
      </Typography>
      <Typography component="div" variant="subtitle2" align="center">
        {user.date_of_birth}
      </Typography>
    </CardContent>
  )
}

export default memo(UserCardContent);