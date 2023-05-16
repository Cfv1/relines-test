import React, {memo} from 'react';
import {Tooltip} from '@mui/material';

import {IUser} from 'src/models/IUser';

interface IUserInfoButtonProps {
  user: IUser;
}

const UserInfoTooltip = (props: React.PropsWithChildren<IUserInfoButtonProps>) => {
  const {user, children} = props;

  const tooltipTitle = (
    <>
      <div>Name: {user.first_name} {user.last_name}</div>
      <div>Gender: {user.gender}</div>
      <div>Data of birth: {user.date_of_birth}</div>
    </>
  );

  return (
    <Tooltip title={tooltipTitle}>
      <div>{children}</div>
    </Tooltip>
  )
}

export default memo(UserInfoTooltip);