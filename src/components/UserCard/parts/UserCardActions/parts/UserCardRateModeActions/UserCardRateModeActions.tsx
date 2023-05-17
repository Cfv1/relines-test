import React, {memo} from 'react';
import {Box, CardActions, IconButton, useTheme} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

import {UserCardActionsProps} from 'src/components/UserCard/parts/UserCardActions/UserCardActions';
import {useEditRatingModal} from './useEditRatingModal';
import {RATING_BUTTONS_CONTAINER, RATING_CONTAINER, RETURN_BUTTON_CONTAINER} from './styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useActions} from 'src/store/hooks/useActions';

const UserCardRateModeActions = (props: UserCardActionsProps) => {
  const {user} = props;

  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const {decreaseRating, increaseRating, enableShowMode} = useActions();

  const onLike = () => {
    increaseRating(user.uid);
  }

  const onDislike = () => {
    decreaseRating(user.uid);
  }

  const onReturn = () => {
    enableShowMode(user.uid);
  }

  const {modal} = useEditRatingModal({user, onSuccess: onReturn});

  return (
    <>
      {modal}

      <CardActions disableSpacing>
        <Box sx={{...RATING_CONTAINER, flexDirection: matches ? 'row' : 'column'}}>
          <Box sx={RATING_BUTTONS_CONTAINER}>
            <IconButton onClick={onLike}>
              <AddIcon fontSize="small" />
            </IconButton>
            <div>
              {user.rating}
            </div>
            <IconButton onClick={onDislike}>
              <RemoveIcon fontSize="small" />
            </IconButton>
          </Box>

          {user.rating === 0 && (
            <Box sx={RETURN_BUTTON_CONTAINER}>
              <IconButton onClick={onReturn}>
                <KeyboardReturnIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>
      </CardActions>
    </>
  )
}

export default memo(UserCardRateModeActions);