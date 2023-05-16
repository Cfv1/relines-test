import React, {memo} from 'react';
import {Card, useTheme, Zoom} from '@mui/material';

import {IUser} from 'src/models/IUser';
import UserCardActions from './parts/UserCardActions/UserCardActions';
import UserCardAvatar from './parts/UserCardAvatar/UserCardAvatar';
import UserCardContent from './parts/UserCardContent/UserCardContent';
import {ROOT_CONTAINER, ROOT_CONTAINER_MOBILE} from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';

interface IUserCardProps {
  data: IUser;
}

const UserCard = (props: IUserCardProps) => {
  const {data} = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Zoom in={true}>
      <Card sx={matches ? ROOT_CONTAINER : ROOT_CONTAINER_MOBILE}>
        <UserCardAvatar user={data}/>
        {matches && <UserCardContent user={data} />}
        <UserCardActions user={data} />
      </Card>
    </Zoom>
  )
}

export default memo(UserCard);