import React, {memo, useMemo} from 'react';
import {Box, IconButton, useTheme} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';

import {
  IMAGE_DEFAULT,
  IMAGE_MOBILE,
  ROOT_CONTAINER,
  TOOLTIP_CONTAINER
} from 'src/components/UserCard/parts/UserCardAvatar/styles';
import {IUser} from 'src/models/IUser';
import UserInfoTooltip from 'src/components/common/UserInfoButton/UserInfoTooltip';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

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
      {!matches && (
        <Box sx={TOOLTIP_CONTAINER}>
          <UserInfoTooltip user={user}>
            <IconButton>
              <HelpOutlineIcon />
            </IconButton>
          </UserInfoTooltip>
        </Box>
      )}
      <Box component="img" sx={imageStyle} src={user.avatar} />
    </Box>
  )
}

export default memo(UserCardAvatar);