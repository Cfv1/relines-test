import React, {memo, useMemo} from 'react';
import {Box, useTheme} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import {IMAGE_DEFAULT, IMAGE_MOBILE, ROOT_CONTAINER} from 'src/components/UserCard/parts/UserCardAvatar/styles';
import {IUser} from 'src/models/IUser';
import UserCardAvatarHeader from 'src/components/UserCard/parts/UserCardAvatar/parts/UserCardAvatarHeader';

interface IUserCardAvatarProps {
  user: IUser;
}

const UserCardAvatar = (props: IUserCardAvatarProps) => {
  const {user} = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const imageStyle = useMemo(() => matches ? IMAGE_DEFAULT : IMAGE_MOBILE, [matches]);

  return (
    <Box sx={ROOT_CONTAINER}>
      <UserCardAvatarHeader user={user} />
      <Box component="img" sx={imageStyle} src={user.avatar} />
    </Box>
  )
}

export default memo(UserCardAvatar);