import React, {memo} from 'react';
import {CardActions, IconButton, useTheme} from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import {UserCardActionsProps} from 'src/components/UserCard/parts/UserCardActions/UserCardActions';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useActions} from 'src/store/hooks/useActions';

const UserCardShowModeActions = (props: UserCardActionsProps) => {
  const {user} = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const {enableRateMode, increaseRating, decreaseRating} = useActions();

  const onChangeMode = () => enableRateMode(user.uid);

  const onLike = () => {
    onChangeMode();
    increaseRating(user.uid)
  }

  const onDislike = () => {
    onChangeMode();
    decreaseRating(user.uid);
  }

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

export default memo(UserCardShowModeActions);