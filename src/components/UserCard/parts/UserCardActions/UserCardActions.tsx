import React, {memo} from 'react';
import {CardActions, IconButton, useTheme} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import useMediaQuery from '@mui/material/useMediaQuery';
import {IUser} from 'src/models/IUser';

interface IUserCardActionsProps {
  user: IUser;
}

const UserCardActions = (props: IUserCardActionsProps) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const onLike = () => {}

  const onDislike = () => {}

  return (
    <CardActions disableSpacing sx={{justifyContent: matches ? 'start' : 'center'}}>
      <IconButton onClick={onLike}>
        <ThumbUpIcon />
      </IconButton>
      <IconButton onClick={onDislike}>
        <ThumbDownIcon />
      </IconButton>
    </CardActions>
  )
}

export default memo(UserCardActions);